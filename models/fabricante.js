const { Sequelize } = require('sequelize/types')
const database = require('./db')

const Fabricantes = database.define('fabricante', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    nome: {
        type: Sequelize.String,
        allowNull: false

    }
})

module.exports = Fabricantes