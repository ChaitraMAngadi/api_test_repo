const express = require('express');
const router = express.Router();
const fitnessproductlist = require('../services/fittness');

/*GET fitness products List. */
router.get('/', async function( req, res, next){
    try{
      res.json(await fitnessproductlist.getFitnessProductList(req));
  
    } 
    catch(err){
      console.error(`error while getting the products`,err.message);
      next(err);
      
    }
  });

  module.exports = router;