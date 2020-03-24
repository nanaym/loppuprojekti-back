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

//lisää käyttäjän uusi postaus
//POST /api/person
router.post('/', function(req, res, next){
  lunchService.insertPost(req.body, (rowCount)=>{
    if(rowCount>0)
    res.status(201).json({message:'Uuden lisäys onnistui!'});
    else{
      res.status(400).json({message:'Oho, kävi virhe!'});
    }
  })
})

//poista käyttäjän postaus
//DELETE /api/person/1
router.delete('/:id', function(req, res, next){
  lunchService.deletePost(req.params.id, (rowCount)=>{
    if(rowCount>0)
    res.status(200).json({message:'Poisto onnistui!'});
    else{
      res.status(400).json({message:'Oho, kävi virhe!'});
    }
  })
})
    module.exports = router;