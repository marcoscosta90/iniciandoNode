const Sequelize = require('sequelize')


//conexao com o banco de dados mysql
const sequelize = new Sequelize('postapp', 'root', '123456', {
  host: 'localhost',
  dialect: 'mysql',
  })

  module.exports = {
    Sequelize: Sequelize,
    sequelize: sequelize
  }
