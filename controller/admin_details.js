const adminDetailsService = require("../services/admin_details");

exports.adminDetails = async (req, res, next) => {
    try{
        res.json(await adminDetailsService.getAdminDetails(req));
    
      } 
      catch(err){
        console.error(`error while getting the admin details`,err.message);
        next(err);
        
      }
}