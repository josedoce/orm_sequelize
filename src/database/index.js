const dev = require('../config/config.json').development;
const Sequelize = require('sequelize');

const sequelize = new Sequelize(
    dev.database,
    dev.username,
    dev.password,
    {
        host: dev.host,
        dialect: dev.dialect
    })

module.exports = {
        Sequelize: Sequelize,
        sequelize: sequelize
}