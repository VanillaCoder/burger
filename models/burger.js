module.exports = function (sequelize, DataTypes) {
  var burgers = sequelize.define("burgers", {
    type: DataTypes.STRING,
    eaten: DataTypes.BOOLEAN
  });
  return burgers;
};