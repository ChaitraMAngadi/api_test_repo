const addToCartService = require("../services/add_to_cart");

exports.addToCart = async (req, res, next) => {
    try{
        res.json(await addToCartService.addToCart(req.params.user_id,req.params.product_id,req.body));
    
      } 
      catch(err){
        console.error(`error while adding to cart`,err.message);
        next(err);
        
      }
}