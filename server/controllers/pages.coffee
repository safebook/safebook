Sequelize = require 'sequelize'
_         = Sequelize.Utils._

module.exports = (App) ->

  create: (req, res) ->
    return res.status(401).end() unless req.session.user_id
    page = req.body
    page.user_id = req.session.user_id
    App.Helpers.create_id 16, (id) ->
      page.id = id
      App.Models.page.create(page)
      .then (page) ->
        res.status(201).json(page)
      .catch (err) ->
        console.log err
        return res.status(401).end()

  ## ###
  # Login Middleware
  ## ###

  fetch_created: (req, res, next) ->
    console.log "oho"
    App.Models.page.findAll(where: { user_id: req.data.I.id })
      .then (pages) ->
        req.data.created_pages = pages
        next()
      .catch (err) -> return res.status(401).end()

  fetch_accessibles: (req, res, next) ->
    App.Models.user.find(where: id: req.session.user_id)
    .then (user) ->
      user.getPages(joinTableAttributes: ['hidden_key'])
      .then (pages) ->
        req.data.accessible_pages = []
        console.log "##### START"
        console.log pages
        req.data.accessible_pages = (_.merge(_.pick(p, 'id', 'name', 'user_id', 'name'), {hidden_key: p.pageLink.hidden_key}) for p in pages)
        console.log (p for p in req.data.accessible_pages)
        console.log "##### END"
        next()
      .catch (err) -> return res.status(401).end()
    .catch (err) -> return res.status(401).end()


    App.Models.pageLink.findAll(where: user_id: req.data.I.id)
    .then (pageLinks) ->
      page_ids = (link.page_id for link in pageLinks)
      App.Models.page.findAll(where: { id: page_ids })
      .then (pages) ->
        for page in pages
          for pageLink in pageLinks
            if pageLink.page_id is page.id
              page.hidden_key = pageLink.hidden_key
        req.data.accessible_pages = pages
        next()
      .catch (err) ->
        return res.status(401).end()
    .catch (err) ->
      return res.status(401).end()
