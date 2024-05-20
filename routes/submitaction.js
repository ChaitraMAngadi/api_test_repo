const express = require('express');
const router = express.Router();
const submitAction= require('../services/submit_action');


  router.get('/:cat_id/:sub_cat_id/:ques_id/:option_id', async function( req, res, next){
    try{
      res.json(await submitAction.getSubmitActionProducts(req.params.cat_id,req.params.sub_cat_id,req.params.ques_id,req.params.option_id,req.body));
  
    } 
    catch(err){
      console.error(`error while getting the questionaries`,err.message);
      next(err);
      
    }
  });

  module.exports = router;