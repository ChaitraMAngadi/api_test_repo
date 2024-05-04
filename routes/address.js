const express = require('express');
const router = express.Router();
const addressData = require('../services/address');

  router.get('/:user_id', async function( req, res, next){
    try{
      res.json(await addressData.getAddress(req.params.user_id,req.body));
      
    } 
    catch(err){
      console.error(`error while getting the wishlist`,err.message);
      next(err);
      
    }
  });

  module.exports = router;