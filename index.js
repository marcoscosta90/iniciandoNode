const express = require("express");
const app = express();
const handlebars = require('express-handlebars')
const bodyParser = require('body-parser')
const Post = require('./models/Post')

//config
//template engine
app.engine('handlebars', handlebars({defaultLayout: 'main'}))
app.set('view engine', 'handlebars')

//Body parser
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())


//rotas
app.get('/', function(req, res){
  Post.findAll({order: [['id', 'DESC']]}).then(function(posts){
    res.render('home', {posts: posts})
  })

})

//rota dop formulario
  app.get('/cad', function(req, res){
    res.render('formulario')
  })

//rota de criacao de dados
  app.post('/add', function(req, res){
    Post.create({
      titulo: req.body.titulo,
      conteudo: req.body.conteudo
    }).then(function(){
      res.redirect('/')
    }).catch(function(erro){
      res.send('Houve um erro '+ erro)
    })

//rota de exclusao de dados
app.get('/deletar/:id', function(req, res){
  Post.destroy({where: {'id': req.params.id}}).then(function(){
    res.send('Postagem deletada com sucesso')

}).catch(function(erro){
  res.send('Essa postagem nao existe')
})
})
  })






app.listen(8081, function(){
  console.log("Servidor rodando na url 8081");
});
