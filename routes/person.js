var express = require('express');
var router = express.Router();
var lunchService =  require('../lunchService')

/* GET people listing. */
//GET /api/person
router.get('/', function(req, res, next) {
      // res.send('Ja yhteys on!');
      lunchService.getPeople((rows)=>{
          res.json(rows);
      })
    });

//GET /api/person/1
router.get('/:id', function(req, res, next){
  lunchService.getPerson(req.params.id,(rows)=>{
   res.json(rows[0]);
 })
})

    module.exports = router;