const express = require('express');
const router = express.Router();
const partnersList = require('../services/partnerslist');

/*GET partners List. */
router.get('/', async function( req, res, next){
    try{
      res.json(await partnersList.getPartnersList(req));
  
    } 
    catch(err){
      console.error(`error while getting the banners`,err.message);
      next(err);
      
    }
  });

  module.exports = router;