const express = require('express');
const router = express.Router();
const productlist = require('../services/productlist');

/*GET programming languages. */
router.get('/', async function( req, res, next){
  try{
    res.json(await productlist.getMultiple(req));

  } 
  catch(err){
    console.error(`error while getting the product list`,err.message);
    next(err);
  }
});

router.get('/top-deals', async function(req, res,next){
    try{
        res.json(await productlist.getMultipleTopdeals(req));
    }
    catch(err){
        console.error(`error while getting the top-deals product list`,err.message);
        next(err);
      }
});


module.exports = router;