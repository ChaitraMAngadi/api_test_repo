const cartService = require("../services/cart");

exports.cart = async (req, res, next) => {
    try{
        res.json(await cartService.getCartData(req.params.user_id,req.params.session_id,req.body));
    
      } 
      catch(err){
        console.error(`error while getting the cart`,err.message);
        next(err);
        
      }
}