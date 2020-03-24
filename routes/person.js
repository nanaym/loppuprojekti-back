var express = require('express');
var router = express.Router();
// var lunchService =  require('../lunchService')

/* GET restaurants listing. */
//GET /api/restaurants
router.get('/', function(req, res, next) {
      res.send('Ja yhteys on!');
    //   postausService.getPosts((rows)=>{
    //       res.json(rows);
    //   })
    });