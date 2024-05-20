const bannerProductService = require("../services/banner_products");

exports.bannerProduct = async (req, res, next) => {
    try{
        res.json(await bannerProductService.getBannerproduct(req.params.id,req.body));
    
      } 
      catch(err){
        console.error(`error while getting the banners`,err.message);
        next(err);
        
      }
}