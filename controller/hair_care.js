const hairCareService = require("../services/hair_care");

exports.hairCare = async (req, res, next) => {
    try{
        res.json(await hairCareService.getHairCareProductList(req));
    
      } 
      catch(err){
        console.error(`error while getting the products`,err.message);
        next(err);
        
      }
}