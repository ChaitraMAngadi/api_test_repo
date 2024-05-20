const express = require('express');
const router = express.Router();
const allOrdersList = require('../services/all_order_list');

  router.get('/:user_id', async function( req, res, next){
    try{
      res.json(await allOrdersList.getAllOdersList(req.params.user_id,req.body));
  
    } 
    catch(err){
      console.error(`error while getting the order-details`,err.message);
      next(err);
      
    }
  });

  module.exports = router;