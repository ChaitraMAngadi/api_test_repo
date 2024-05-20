const express = require('express');
const router = express.Router();
const productlist = require('../services/product_list');

/*GET list of products. */
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

router.get('/new-arrivals', async function(req, res,next){
  try{
      res.json(await productlist.getNewArrivals(req));
  }
  catch(err){
      console.error(`error while getting the new-arrivals from product list`,err.message);
      next(err);
    }
});

router.get('/trending-offers', async function(req, res,next){
  try{
      res.json(await productlist.getTrendingOffers(req));
  }
  catch(err){
      console.error(`error while getting the trending-offers from product list`,err.message);
      next(err);
    }
});


module.exports = router;