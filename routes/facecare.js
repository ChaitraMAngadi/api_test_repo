const express = require('express');
const router = express.Router();
const facecareproductlist = require('../services/face_care');

/*GET face care products List. */
router.get('/', async function( req, res, next){
    try{
      res.json(await facecareproductlist.getFaceCareProductList(req));
  
    } 
    catch(err){
      console.error(`error while getting the products`,err.message);
      next(err);
      
    }
  });

  module.exports = router;