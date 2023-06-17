var express = require('express');
var router = express.Router();
const connection = require('../conexion/conexion');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

/* Validar datos*/
router.post('/', async(req,res)=>{
  const user = req.body.user;
  const pass = req.body.pass; 
  if(user && pass){
    connection.query('SELECT * FROM users',async (error,results)=>{  
      console.log(results);
      for(let i=0; i<results.length; i++){
        if(user == results[i].user){
          console.log("existe")
          if(pass == results[i].pass){
            console.log('esta bien')
            if("admin" == results[i].rol){
              res.redirect('admin');
            }else{
              res.render('index', { title: 'SportX' });
            }
          }else{
            console.log('Contra incorrecto'); 
          } 
        }else{
          console.log('Usuario incorrecto'); 
        } 
      }
    })
  }
})

module.exports = router;
