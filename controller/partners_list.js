const partnerListService = require("../services/partners_list");

exports.partnerList = async (req, res, next) => {
    try{
        res.json(await partnerListService.getPartnersList(req));
    
      } 
      catch(err){
        console.error(`error while getting the partner list`,err.message);
        next(err);
        
      }
}