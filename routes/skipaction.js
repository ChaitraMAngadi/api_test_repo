const express = require('express');
const router = express.Router();
const skipAction= require('../services/skipaction');


  router.get('/:cat_id/:sub_cat_id', async function( req, res, next){
    try{
      res.json(await skipAction.getSkipActionProducts(req.params.cat_id,req.params.sub_cat_id,req.body));
  
    } 
    catch(err){
      console.error(`error while getting the questionaries`,err.message);
      next(err);
      
    }
  });

  module.exports = router;