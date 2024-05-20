const express = require('express');
const router = express.Router();
const myProfile = require('../services/user_profile');

  router.get('/:user_id', async function( req, res, next){
    try{
      res.json(await myProfile.getMyProfile(req.params.user_id,req.body));
  
    } 
    catch(err){
      console.error(`error while getting the wishlist`,err.message);
      next(err);
      
    }
  });

  module.exports = router;