class App.Views.home extends Backbone.View

  render: =>
    template = Handlebars.compile $("#homeTemplate").html()
    @$el.html template(I: App.I.get('pseudo'))

    App.Views.UserList = new App.Views.userList(el: $("#userList"))
    App.Views.UserList.render()

    App.Views.UserRequestList = new App.Views.userRequestList(el: $("#userRequestList"))
    App.Views.UserRequestList.render()

    App.Views.UserRequestList = new App.Views.userBlockList(el: $("#userBlockList"))
    App.Views.UserRequestList.render()

    App.Views.UserSearch = new App.Views.userSearch(el: $("#userSearch"), collection: App.SearchResults)
    App.Views.UserSearch.render()

    App.Views.PageList = new App.Views.pageList(
      el: $("#pageList")
      collection: App.Pages
    )
    App.Views.PageList.render()

    @
