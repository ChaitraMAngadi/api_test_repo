const fittnessService = require("../services/fittness");

exports.fittness = async (req, res, next) => {
    try{
        res.json(await fittnessService.getFitnessProductList(req));
    
      } 
      catch(err){
        console.error(`error while getting the products`,err.message);
        next(err);
        
      }
}