const express = require('express');
const router = express.Router();
const partnersList = require('../services/partners_list');

/*GET partners List. */
router.get('/', async function( req, res, next){
    try{
      res.json(await partnersList.getPartnersList(req));
  
    } 
    catch(err){
      console.error(`error while getting the partner list`,err.message);
      next(err);
      
    }
  });

  module.exports = router;