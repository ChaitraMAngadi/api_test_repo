const faceCareService = require("../services/face_care");

exports.faceCare = async (req, res, next) => {
    try{
        res.json(await faceCareService.getFaceCareProductList(req));
    
      } 
      catch(err){
        console.error(`error while getting the products`,err.message);
        next(err);
        
      }
}