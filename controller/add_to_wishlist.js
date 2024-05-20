const addToWishListService = require('../services/add_to_wishlist');

exports.addToWishlist = async (req, res, next) => {
    try{
        res.json(await addToWishListService.addToWishList(req.params.id,req.body));
    
      } 
      catch(err){
        console.error(`error while adding to wishlist`,err.message);
        next(err);
        
      }
}