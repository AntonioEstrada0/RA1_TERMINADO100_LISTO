var express = require('express');
var router = express.Router();
var db = require("../conexion/conexion");
const bcrypt = require('bcryptjs/dist/bcrypt');
const bcryptjs = require('bcryptjs');
const connection = require('../conexion/conexion');


/* consulta */
/* GET admin page. */
router.get('/', function(req, res) {
  db.query('SELECT * FROM tbProductos',function(error,results){
    if(error){
      throw error;
    }else{
      res.render('admin',{title: 'Productos disponibles', Libros: results});
    }
  })
  });


module.exports = router;