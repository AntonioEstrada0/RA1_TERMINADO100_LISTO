var express = require('express');
var router = express.Router();

  /* GET crear registros page. */
  router.get('/create',(req,res)=>{
    res.render('create');
  })



module.exports = router;