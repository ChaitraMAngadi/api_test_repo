const express = require('express');
const router = express.Router();
const beardcareproductlist = require('../services/beard_care');

/*GET beard care products List. */
router.get('/', async function( req, res, next){
    try{
      res.json(await beardcareproductlist.getBeardCareProductList(req));
  
    } 
    catch(err){
      console.error(`error while getting the products`,err.message);
      next(err);
      
    }
  });

  module.exports = router;