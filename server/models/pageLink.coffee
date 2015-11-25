Sequelize = require 'sequelize'
_         = Sequelize.Utils._

module.exports = (App, sequelize) ->
  return sequelize.define('pageLink', {
    id:
      type: Sequelize.STRING
      primaryKey: true
    page_id:
      type: Sequelize.STRING
      references: App.Models.page,
      referencesKey: 'id',
    user_id:
      type: Sequelize.STRING
      references: App.Models.user,
      referencesKey: 'id',
    hidden_key:
      type: Sequelize.STRING
  }, {
    timestamps: false
  })
