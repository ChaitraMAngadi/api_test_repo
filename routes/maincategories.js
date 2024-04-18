const express = require('express');
const router = express.Router();
const mainCategoriesList = require('../services/maincategories');

/*GET Main Categories List. */
router.get('/', async function( req, res, next){
    try{
      res.json(await mainCategoriesList.getMainCategories(req));
  
    } 
    catch(err){
      console.error(`error while getting the Categories`,err.message);
      next(err);
      
    }
  });

  module.exports = router;