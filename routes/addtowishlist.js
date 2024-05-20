const express = require('express');
const router = express.Router();
const addToWishList = require('../services/add_to_wishlist');

router.get('/:id', async function( req, res, next){
    try{
      res.json(await addToWishList.addToWishList(req.params.id,req.body));
  
    } 
    catch(err){
      console.error(`error while adding to wishlist`,err.message);
      next(err);
      
    }
  });

  module.exports = router;