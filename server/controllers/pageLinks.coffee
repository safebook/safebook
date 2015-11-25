Sequelize = require 'sequelize'
_         = Sequelize.Utils._

module.exports = (App) ->

  create: (req, res) ->
    return res.status(401).end() unless req.session.user_id
    pageLink = req.body
    App.Models.user.find(where: id: req.session.user_id) .then (user) ->
      App.Models.page.find(where: { id: pageLink.page_id, user_id: req.session.user_id }) .then (page) ->
        App.Helpers.create_id 16, (id) ->
          pageLink.id = id
          page.hidden_key = pageLink.hidden_key
          page.addUser(user, id: id, hidden_key: pageLink.hidden_key).then (result) ->
            App.io.to(pageLink.user_id).emit('pageLink:add', page)
            res.status(201).json(pageLink)
          .catch (err) -> return res.status(401).end()
      .catch (err) -> return res.status(401).end()
    .catch (err) -> return res.status(401).end()

  delete: (req, res) ->
    return res.status(401).end() unless req.session.user_id
    #refactor when receiving page_id and user_id instead of pagelink_id
    App.Models.pageLink.find(where: id: req.params.id).then (pageLink) ->
      App.Models.page.find( where: { id: pageLink.page_id, user_id: req.session.user_id }).then (page) ->
        pageLink.destroy().then ->
          console.log 'deleted pagelink'
          App.io.to(pageLink.user_id).emit('pageLink:delete', page)
          res.status(200).end()
        .catch (err) -> return res.status(401).end()
      .catch (err) -> return res.status(401).end()
    .catch (err) -> return res.status(401).end()

  ## ###
  # Login Middleware
  ## ###

  fetch: (req, res, next) ->
    a = (page.id for page in req.data.created_pages)
    b = (page.id for page in req.data.accessible_pages)
    page_ids = _.union(a, b)
    App.Models.pageLink.findAll(where: page_id: page_ids)
      .then (pageLinks) ->
        req.data.pageLinks = pageLinks
        next()
      .catch (err) ->
        return res.status(401).end()
