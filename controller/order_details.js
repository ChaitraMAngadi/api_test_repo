const orderDetailsService = require("../services/order_details");

exports.orderDetails = async (req, res, next) => {
    try{
        res.json(await orderDetailsService.getOderDetails(req.params.order_id,req.body));
    
      } 
      catch(err){
        console.error(`error while getting the order-details`,err.message);
        next(err);
        
      }
}