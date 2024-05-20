const whatWeDoService = require("../services/what_we_do");

exports.whatWeDo = async (req, res, next) => {
    try{
        res.json(await whatWeDoService.getwhatwedodata(req));
    
      } 
      catch(err){
        console.error(`error while getting the what we do details`,err.message);
        next(err);
        
      }
}