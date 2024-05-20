const addressService = require("../services/address");

exports.address = async (req, res, next) => {
    try{
        res.json(await addressService.getAddress(req.params.user_id,req.body));
        
      } 
      catch(err){
        console.error(`error while address`,err.message);
        next(err);
        
      }
}