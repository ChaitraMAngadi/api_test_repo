const express = require('express');
const router = express.Router();
const healthandwellnessproductlist = require('../services/healthandwellness');

/*GET hair care products List. */
router.get('/', async function( req, res, next){
    try{
      res.json(await healthandwellnessproductlist.getHealtAndWellnesProductList(req));
  
    } 
    catch(err){
      console.error(`error while getting the products`,err.message);
      next(err);
      
    }
  });

  module.exports = router;