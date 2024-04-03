const express = require('express');
const router = express.Router();
const bannerlist = require('../services/banners');

/*GET programming languages. */
router.get('/', async function( req, res, next){
    try{
      res.json(await bannerlist.getBanners(req));
  
    } 
    catch(err){
      console.error(`error while getting the banners`,err.message);
      next(err);
      
    }
  });

  module.exports = router;