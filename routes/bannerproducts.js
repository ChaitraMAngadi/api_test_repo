const express = require('express');
const router = express.Router();
const bannerProduct = require('../services/banner_products');

/*GET banner product List. */
router.get('/:id', async function( req, res, next){
    try{
      res.json(await bannerProduct.getBannerproduct(req.params.id,req.body));
  
    } 
    catch(err){
      console.error(`error while getting the banners`,err.message);
      next(err);
      
    }
  });

  module.exports = router;