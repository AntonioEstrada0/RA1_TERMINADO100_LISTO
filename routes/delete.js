var express = require('express');
var router = express.Router();
const connection = require('../conexion/conexion');
const { render } = require("ejs");
const funciones = require('../model/funciones');

router.get('/', function(req, res, next) {
  res.render('delete');
});

router.post('/', function (req, res, next) {
  console.log('vamis aqui')
  funciones.borrar(connection, req.body, function(err, datos){
    res.redirect("admin")
  })
})

module.exports = router;