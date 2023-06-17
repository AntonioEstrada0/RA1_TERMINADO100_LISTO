var express = require('express');
var router = express.Router();
const connection = require('../conexion/conexion');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});


/*Mandar datos formulario */
router.post('/', async(req, res)=>{
    const user =req.body.user;
    const name =req.body.name;
    const rol =req.body.rol;
    const pass =req.body.pass;
    connection.query('INSERT INTO users SET ?',{user:user, name:name,rol:rol,pass:pass},async(error,results)=>{
       if(error){
         console.log(error);
       }else{
            res.render('login', { title: 'Iniciar sesion' });
          
       }
     })
   });

module.exports = router;
