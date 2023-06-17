var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'SportX' });
});

/* GET nosotros page. */
router.get('/nosotros', function(req, res, next) {
  res.render('nosotros', { title: 'Quienes somos..' });
});

/* GET login page. */
router.get('/login', function(req, res, next) {
  res.render('login', { title: 'Iniciar sesion' });
});

/* GET registro page. */
router.get('/registro', function(req, res, next) {
  res.render('registro', { title: 'Registrar cuenta' });
});

// /* GET admin page. */
router.get('/create', function(req, res, next) {
   res.render('create', { title: 'Pestaña crear' });
   });


   const crud=require('../controllers/crud');
   router.post('/save',crud.save);
module.exports = router;

