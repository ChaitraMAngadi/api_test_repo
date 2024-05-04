const express = require('express');
const router = express.Router();
const relatedProducts= require('../services/relatedproducts');


  router.get('/:cat_id', async function( req, res, next){
    try{
      res.json(await relatedProducts.getRelatedProducts(req.params.cat_id,req.body));
  
    } 
    catch(err){
      console.error(`error while getting the related products`,err.message);
      next(err);
      
    }
  });

  module.exports = router;