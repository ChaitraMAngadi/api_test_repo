const express = require('express');
const router = express.Router();
const questionaries= require('../services/questionaries');

/*GET what questionaries details.*/
router.get('/', async function( req, res, next){
    try{
      res.json(await questionaries.getQuestionaries(req));
  
    } 
    catch(err){
      console.error(`error while getting the questionaries`,err.message);
      next(err);
      
    }
  });

  router.get('/:cat_id/:sub_cat_id', async function( req, res, next){
    try{
      res.json(await questionaries.getQuestionariesById(req.params.cat_id,req.params.sub_cat_id,req.body));
  
    } 
    catch(err){
      console.error(`error while getting the questionaries`,err.message);
      next(err);
      
    }
  });

  module.exports = router;