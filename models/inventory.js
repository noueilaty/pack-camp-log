'use strict';
module.exports = (sequelize, DataTypes) => {
  var inventory = sequelize.define('inventory', {
    item: DataTypes.STRING,
    category: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return inventory;
};