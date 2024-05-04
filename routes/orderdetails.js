const express = require('express');
const router = express.Router();
const orderDetails = require('../services/orderdetails');

  router.get('/:order_id', async function( req, res, next){
    try{
      res.json(await wishList.getWhishList(req.params.order_id,req.body));
  
    } 
    catch(err){
      console.error(`error while getting the order-details`,err.message);
      next(err);
      
    }
  });

  module.exports = router;