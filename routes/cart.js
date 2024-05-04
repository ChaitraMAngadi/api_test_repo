const express = require('express');
const router = express.Router();
const cartList = require('../services/cart');

  router.get('/:user_id/:session_id', async function( req, res, next){
    try{
      res.json(await cartList.getCartData(req.params.user_id,req.params.session_id,req.body));
  
    } 
    catch(err){
      console.error(`error while getting the cart`,err.message);
      next(err);
      
    }
  });

  module.exports = router;