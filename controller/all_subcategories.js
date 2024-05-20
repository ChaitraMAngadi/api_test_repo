const allSubCategoriesService = require("../services/all_subcategories");

exports.allSubCategories = async (req, res, next) => {
    try{
        res.json(await allSubCategoriesService.getAllSubCategories(req));
    
      } 
      catch(err){
        console.error(`error while getting the sub categories`,err.message);
        next(err);
        
      }
}

exports.SubCategoriesById = async (req, res, next) => {
    try{
        res.json(await allSubCategoriesService.getSubCategoriesById(req.params.id,req.body));
    
      } 
      catch(err){
        console.error(`error while getting the sub categories`,err.message);
        next(err);
        
      }
}