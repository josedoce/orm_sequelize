const {sequelize, Sequelize} = require('../database/index');

const User = sequelize.define('pessoa', {
  name: { 
    type: Sequelize.DataTypes.STRING,
  },
  age: {
    type: Sequelize.DataTypes.INTEGER
  }
});

module.exports = User;