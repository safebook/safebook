Sequelize = require 'sequelize'
_         = Sequelize.Utils._

module.exports = (App, sequelize) ->

  create: (req, res) ->
    user = req.body
    user.id = user.pubkey.substring(0, 8)
    user.remote_password_salt = App.Helpers.gen_salt()
    user.remote_password_hash = App.Helpers.hash(req.body.remote_secret, user.remote_secret_salt)
    App.Models.user.create(user).then((user) ->
      req.session.user_id = user.id
      res.status(201).send(user)).error (error) ->
        res.status(401).end()

  find: (req, res) ->
    return unless req.session.user_id
    pseudo = req.params.pseudo
    App.Models.user.findAll(where: not: {id: req.session.user_id}, pseudo: $like: "%#{pseudo}%")
    .then (users) ->
      users_list = (user.public() for user in users)
      console.log users_list
      res.json(users_list)
    .error (err) ->
      console.log(err)

  add: (req, res) ->
    return res.status(401).end() unless req.session.user_id
    App.Models.user.find(req.session.user_id).then (user) ->
      App.Models.user.find(req.params.user_id).then (contact) ->
        user.addContact(contact).then ->
          App.io.to(req.params.user_id).emit('user:add', user.public())
          res.status(201).json({status: 'success'})
        .catch (error) -> res.status(401).end()
      .catch (error) -> res.status(401).end()
    .catch (error) -> res.status(401).end()

  block: (req, res) ->
    return unless req.session.user_id
    App.Models.user.find(req.session.user_id).then (user) ->
      App.Models.user.find(req.params.user_id).then (contact) ->
        user.addContact(contact, blocked: true).then (result) ->
          res.status(201).json({status: 'success'})
        .catch (error) -> res.status(401).end()
      .catch (error) -> res.status(401).end()
    .catch (error) -> res.status(401).end()

  ## ###
  # Login Middleware
  ## ###

  auth: (req, res, next) ->
    App.Models.user.find(where: pseudo: req.body.pseudo).then (user) ->
      return res.status(401).json(error: "No such pseudo") if not user
      return res.status(401).json(error: "Bad password !") unless user.remote_password_hash is App.Helpers.hash(req.body.remote_secret, user.remote_password_salt)
      req.session.user_id = user.id
      req.data = {}
      req.data.I = user.full()
      console.log 0
      user.getContacts(attributes: ['id', 'pseudo', 'pubkey'], order: [['id', 'ASC']])
      .then (res) ->
        console.log 1
        contacts = (_.merge(_.pick(c, 'id', 'pseudo', 'pubkey'), {blocked: c.friends.blocked}) for c in res)
        user.getRequestedContacts(attributes: ['id', 'pseudo', 'pubkey'], order: [['id', 'ASC']])
        .then (res) ->
          console.log 2
          requestedContacts = (_.pick(c, 'id', 'pseudo', 'pubkey') for c in res)

          req.data.contacts = []
          loop
            if contacts.length is 0 and requestedContacts.length is 0
              break
            if contacts.length is 0
              req.data.contacts.push requestedContacts.shift()
            else if requestedContacts.length is 0
              req.data.contacts.push _.merge(contacts.shift(), added: true)
            else if contacts[0].id == requestedContacts[0].id
              req.data.contacts.push _.merge({added: true, confirmed: true}, contacts.shift())
              requestedContacts.shift()
            else if contacts[0].id < requestedContacts[0].id
              req.data.contacts.push _.merge({added: true}, contacts.shift())
            else
              req.data.contacts.push requestedContacts.shift()
          console.log 3
          console.log req.data.contacts
          next()

        .catch (error) -> return res.status(401).end()
      .catch (error) -> return res.status(401).end()
    .catch (error) -> return res.status(401).end()

  fetch: (req, res, next) ->
    a = (msg.user_id        for msg  in req.data.messages)
    b = (msg.destination_id for msg  in req.data.messages)
    c = (page.user_id       for page in req.data.accessible_pages)
    d = (link.user_id       for link in req.data.pageLinks)
    user_contacts = _.union(_.union(a,b), _.union(c,d))

    App.Models.user.findAll(where: id: user_contacts).then (users) ->
      req.data.users = (user.public() for user in users)
      next()
    .error (err) ->
      return res.status(401).end()
