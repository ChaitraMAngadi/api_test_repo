const healthAndWellnessService = require("../services/health_and_wellness");

exports.healthAndWellness = async (req, res, next) => {
    try{
        res.json(await healthAndWellnessService.getHealtAndWellnesProductList(req));
    
      } 
      catch(err){
        console.error(`error while getting the products`,err.message);
        next(err);
        
      }
}