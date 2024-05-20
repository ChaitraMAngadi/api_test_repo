const beardCareService = require("../services/beard_care");

exports.beardCare = async (req, res, next) => {
    try{
        res.json(await beardCareService.getBeardCareProductList(req));
    
      } 
      catch(err){
        console.error(`error while getting the products`,err.message);
        next(err);
        
      }
}