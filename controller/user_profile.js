const myProfileService = require("../services/user_profile");

exports.userProfile = async (req, res, next) => {
    try{
        res.json(await myProfileService.getUserProfile(req.params.user_id,req.body));
    
      } 
      catch(err){
        console.error(`error while getting the user profile`,err.message);
        next(err);
        
      }
}