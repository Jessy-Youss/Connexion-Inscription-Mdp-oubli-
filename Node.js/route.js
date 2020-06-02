var express = require('express');
const mysql = require('./B.D.D')
var app = express();
bodyParser = require('body-parser')
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


//activation du cors:Le partage des ressources entre origines multiples (CORS, Cross Origin Resource Sharing) est un mécanisme permettant les interactions entre des ressources d'origines différentes, ce qui est normalement interdit afin d'empêcher tout comportement malveillant.
var cors = require('cors')
app.use(cors())

app.get('/connection', function(req, res, next) {
   var email = req.query.email
   var mdp = req.query.mdp
   mysql.query("SELECT * FROM utilisateur WHERE mail = '"+email+"' AND mdp = " +mdp,(req,row)=>{
    res.send(row)
  })
  })

  app.get('/information',function(req, res, next){
var id = req.query.id
mysql.query("SELECT * FROM utilisateur WHERE id = "+id,(req,row)=>{
  res.send(row)
})
  })

  app.post('/inscription',function(req, res, next){
    var nom = req.body.nom
    var prenom = req.body.prenom
    var mail = req.body.mail
    var mdp = req.body.mdp
    mysql.query("INSERT INTO utilisateur (nom,prenom,mail,mdp) VALUES ('"+ nom + "', '" + prenom +"' ,'" + mail +"', '"+mdp +"' )",(req,row)=>{
    })
  })

  app.get('/recupMail', function(req, res, next) {
    var email = req.query.email
    mysql.query("SELECT * FROM utilisateur WHERE mail = '"+email+"'",(req,row)=>{
     res.send(row)
   })
   })

   app.post('/mdpChange',function(req, res, next){
    var mdp = req.body.mdp
    var email = req.body.email
    mysql.query("UPDATE utilisateur SET `mdp`="+mdp+" WHERE mail = '"+email+"'",(req,row)=>{
    })
  })


app.listen(8080)