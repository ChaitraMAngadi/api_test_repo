const bannerService = require("../services/banners");

exports.banners = async (req, res, next) => {
    try{
        res.json(await bannerService.getBanners(req));
    
      } 
      catch(err){
        console.error(`error while getting the banners`,err.message);
        next(err);
        
      }
}