const express = require('express');
const router = express.Router();
const allSubCategories = require('../services/all_subcategories');

/*GET all Sub categories List. */
router.get('/', async function( req, res, next){
    try{
      res.json(await allSubCategories.getAllSubCategories(req));
  
    } 
    catch(err){
      console.error(`error while getting the sub categories`,err.message);
      next(err);
      
    }
  });

  router.get('/:id', async function( req, res, next){
    try{
      res.json(await allSubCategories.getSubCategoriesById(req.params.id,req.body));
  
    } 
    catch(err){
      console.error(`error while getting the banners`,err.message);
      next(err);
      
    }
  });

  module.exports = router;