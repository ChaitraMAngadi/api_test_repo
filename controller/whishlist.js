const whishlistService = require("../services/wishlist");


exports.wishlist = async (req, res, next) => {
    try{
        res.json(await whishlistService.getWhishList(req.params.user_id,req.body));
    
      } 
      catch(err){
        console.error(`error while getting the wishlist`,err.message);
        next(err);
        
      }
} 