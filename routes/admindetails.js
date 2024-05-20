const express = require('express');
const router = express.Router();
const adminDetails = require('../services/admin_details');

/*GET admin details. */
router.get('/', async function( req, res, next){
    try{
      res.json(await adminDetails.getPartnersList(req));
  
    } 
    catch(err){
      console.error(`error while getting the admin details`,err.message);
      next(err);
      
    }
  });

  module.exports = router;