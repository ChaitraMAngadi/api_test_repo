const bodyCareService = require("../services/body_care");

exports.bodyCare = async (req, res, next) => {
    try{
        res.json(await bodyCareService.getBodyCareProductList(req));
    
      } 
      catch(err){
        console.error(`error while getting the products`,err.message);
        next(err);
        
      }
}