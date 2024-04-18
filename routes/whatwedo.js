const express = require('express');
const router = express.Router();
const whatwedodata = require('../services/whatwedo');

/*GET partners List. */
router.get('/', async function( req, res, next){
    try{
      res.json(await whatwedodata.getwhatwedodata(req));
  
    } 
    catch(err){
      console.error(`error while getting the banners`,err.message);
      next(err);
      
    }
  });

  module.exports = router;