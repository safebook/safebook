casper.options.viewportSize = {width: 1024, height: 768}

getRandomInt = (max) -> Math.floor(Math.random() * (max + 1))
getRandomString = -> getRandomInt(9999999).toString()

user_name = getRandomString()

casper.test.begin 'You can use it alone', 2, (test) ->

  casper.start 'http://0.0.0.0:8000/', ->
    @sendKeys("#pseudo_input", user_name)
    @sendKeys("#string_password_input", user_name)
    @click("#signup")

  casper.waitForUrl '#home', ->
    @click("#userList a")

  casper.waitForUrl /#user\/.*/, ->
    @sendKeys("#message_input", "Secret message")
    @click("#send_message")

  casper.waitForSelector '#messageList > div'

  casper.thenOpen 'http://0.0.0.0:8000/', ->
    @sendKeys("#pseudo_input", user_name)
    @sendKeys("#string_password_input", user_name)
    @click("#signin")

  casper.waitForUrl '#home', ->
    @click("#userList a")

  casper.waitForUrl /#user\/.*/, ->
    test.assertElementCount("#messageList > div", 1)
    test.assertSelectorHasText("#messageList", "Secret message")

  casper.then(-> test.done()).run()
