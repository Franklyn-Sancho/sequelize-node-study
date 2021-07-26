const Sequelize = require('sequelize')
const sequelize = new Sequelize('crud', 'root', 'FrankSanc', {
    dialect: 'mysql',
    host: 'localhost'
})

module.exports = sequelize