const express = require('express');
const router = express.Router();
const addToCart= require('../services/add_to_cart');


  router.get('/:user_id/:product_id', async function( req, res, next){
    try{
      res.json(await addToCart.addToCart(req.params.user_id,req.params.product_id,req.body));
  
    } 
    catch(err){
      console.error(`error while adding to cart`,err.message);
      next(err);
      
    }
  });

  module.exports = router;