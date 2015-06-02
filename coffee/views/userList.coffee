class App.Views.userList extends Backbone.View

  initialize: =>
    @listenTo(App.Users, 'add remove change', @render)

  add_one: (user) =>
    view = new App.Views.user(model: user)
    @$("#users_list").append(view.render().el)

  add_all: =>
    _(App.Users.where(added: true)).each(@add_one)

  render: =>
    @$el.html Handlebars.compile($("#userListTemplate").html())()
    @add_all()

class App.Views.user extends Backbone.View

  events:
    'click .block': 'block'

  block: (e) =>
    e.preventDefault()
    $.ajax url: "/friend_requests/#{@model.get('id')}/block"
    , success: (res) =>
      App.Users.remove @model
    , error: =>
      alert 'Error while blocking the user.'

  render: =>
    template = Handlebars.compile $("#userTemplate").html()
    @$el.html template(@model.toJSON())
    @

class App.Views.userRequestList extends Backbone.View

  initialize: =>
    @listenTo(App.Users, 'add remove change', @render)

  render_list: =>
    @$('#requests_list').empty()
    _(App.Users.reject((u) -> u.get('added') or u.get('blocked'))).each (user) =>
      console.log user
      user_request_view = new App.Views.userRequest(model: user)
      user_request_view.render()
      @$('#requests_list').append(user_request_view.el)

  render: =>
    template = Handlebars.compile $("#userRequestListTemplate").html()
    @$el.html template()
    @render_list()

class App.Views.userRequest extends Backbone.View

  events:
    'click .accept': 'accept_request'
    'click .block':  'decline_request'

  accept_request: (e) =>
    e.preventDefault()
    $.ajax url: '/friend_requests/' + @model.get('id') + '/add', success: (res) =>
      @model.set added: true
    , error: =>
      alert 'Error while accepting the request.'

  decline_request: (e) =>
    e.preventDefault()
    $.ajax url: '/friend_requests/' + @model.get('id') + '/block', success: (res) =>
      @model.set blocked: true
    , error: =>
      alert 'Error while accepting the request.'

  render: =>
    template = Handlebars.compile $("#userRequestTemplate").html()
    @$el.html template(@model.toJSON())
    @

class App.Views.userSearch extends Backbone.View

  initialize: =>
    @listenTo(@collection, 'reset', @render_results)

  render: =>
    @$el.html $("#userSearchTemplate").html()
    @

  render_results: =>
    @$('#search_user_results').empty()
    @collection.each (user) =>
      user_result_view = new App.Views.searchResult(model: user)
      user_result_view.render()
      @$('#search_user_results').append(user_result_view.el)

  events:
    'keyup #search_user_input': 'keypress'

  keypress: (e) =>
    @search_user $("#search_user_input").val()

  search_user: (pseudo) =>
    return unless pseudo
    $.ajax url: '/user/' + pseudo, success: (users) =>
      @collection.reset(users)


class App.Views.searchResult extends Backbone.View

  events:
    'click a': 'add_friend'

  add_friend: (e) =>
    e.preventDefault()
    $.ajax url: '/friend_requests/' + @model.get('id') + '/add', success: =>
      App.SearchResults.reset()
      $("#userSearchTemplate").val("")
      $("#search_user_input").val("")

      App.Users.add(@model.set(added: true))
    , error: =>
      alert 'Error while sending the request.'


  render: =>
    template = Handlebars.compile $("#searchResultTemplate").html()
    @$el.html template(@model.toJSON())
    @

