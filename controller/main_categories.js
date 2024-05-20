const mainCategoriesService = require("../services/main_categories");

exports.mainCategories = async (req, res, next) => {
    try{
        res.json(await mainCategoriesService.getMainCategories(req));
    
      } 
      catch(err){
        console.error(`error while getting the Categories`,err.message);
        next(err);
        
      }
}