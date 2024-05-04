const express = require('express');
const router = express.Router();
const whatwedodata = require('../services/whatwedo');

/*GET what we do details. */
router.get('/', async function( req, res, next){
    try{
      res.json(await whatwedodata.getwhatwedodata(req));
  
    } 
    catch(err){
      console.error(`error while getting the what w e do details`,err.message);
      next(err);
      
    }
  });

  module.exports = router;