const express = require('express');
const router = express.Router();
const haircareproductlist = require('../services/hair_care');

/*GET hair care products List. */
router.get('/', async function( req, res, next){
    try{
      res.json(await haircareproductlist.getHairCareProductList(req));
  
    } 
    catch(err){
      console.error(`error while getting the products`,err.message);
      next(err);
      
    }
  });

  module.exports = router;