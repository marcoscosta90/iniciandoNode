const Sequelize = require('sequelize')
const sequelize = new Sequelize('teste', 'root', 'delirinho218872', {
  host: 'localhost',
  dialect: 'mysql',
  })

const Postagem = sequelize.define('postagens', {
  titulo: {
    type: Sequelize.STRING
  },
  conteudo: {
    type: Sequelize.TEXT
  }

})

Postagem.create({
  titulo: "um titulo qualquer",
  conteudo: "um conteudo qualquerr"
})


const Usuario = sequelize.define('usuarios', {
  nome: {
    type: Sequelize.STRING
  },
  sobrenome: {
    type: Sequelize.STRING
  },
  idade: {
    type: Sequelize.INTEGER
  },
  email: {
    type: Sequelize.STRING
  }
})
Usuario.create({
  nome: 'marcos',
  sobrenome: 'costa',
  idade: 28,
  email: 'marcoscostaengproducao@gmail.com'
})
Usuario.sync()
