Sequelize = require 'sequelize'
_         = Sequelize.Utils._

# before
# CREATE TABLE IF NOT EXISTS `Friends` (`UserId` VARCHAR(255) NOT NULL REFERENCES `Users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE, `FriendId` VARCHAR(255) NOT NULL REFERENCES `Users` (`id`), PRIMARY KEY (`UserId`, `FriendId`));
# CREATE TABLE IF NOT EXISTS `friends` (`UserId` VARCHAR(255) NOT NULL REFERENCES `Users` (`id`), `FriendId` VARCHAR(255) NOT NULL REFERENCES `Users` (`id`), `createdAt` DATETIME NOT NULL, `updatedAt` DATETIME NOT NULL, PRIMARY KEY (`UserId`, `FriendId`));
# )

module.exports = (App, sequelize) ->
  return sequelize.define('friends', {
    id:
      type: Sequelize.INTEGER
      primaryKey: true
    user_id:
      type: Sequelize.STRING,
      references: App.Models.user,
      referencesKey: 'id',
    friend_id:
      type: Sequelize.STRING,
      references: App.Models.user,
      referencesKey: 'id',
    blocked:
      type: Sequelize.BOOLEAN
  }, {
    timestamps: false
  }) # A FINIR
