const express = require('express');
const router = express.Router();
const productDetails= require('../services/product');


  router.get('/:product_id', async function( req, res, next){
    try{
      res.json(await productDetails.getProduct(req.params.product_id,req.body));
  
    } 
    catch(err){
      console.error(`error while getting the questionaries`,err.message);
      next(err);
      
    }
  });

  module.exports = router;