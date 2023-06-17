var express = require('express');
var router = express.Router();
var db = require("../conexion/conexion");
const bcrypt = require('bcryptjs/dist/bcrypt');
const bcryptjs = require('bcryptjs');
const connection = require('../conexion/conexion');

/* GET productos page. */

router.get('/', function(req, res, next) {
  db.query("SELECT * FROM tbProductos",function(err,resultado){
    res.render('productos', {title: 'Productos disponibles', Libros: resultado });
  });
});

module.exports = router;