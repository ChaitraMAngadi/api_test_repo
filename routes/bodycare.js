const express = require('express');
const router = express.Router();
const bodycareproductlist = require('../services/bodycare');

/*GET body care products List. */
router.get('/', async function( req, res, next){
    try{
      res.json(await bodycareproductlist.getBodyCareProductList(req));
  
    } 
    catch(err){
      console.error(`error while getting the products`,err.message);
      next(err);
      
    }
  });

  module.exports = router;