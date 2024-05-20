const skipACtionService = require("../services/skip_action");

exports.skipAction = async (req, res, next) => {
    try{
        res.json(await skipACtionService.getSkipActionProducts(req.params.cat_id,req.params.sub_cat_id,req.body));
    
      } 
      catch(err){
        console.error(`error while getting the products`,err.message);
        next(err);
        
      }
}