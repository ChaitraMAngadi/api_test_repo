const myorderServices = require("../services/my_order");

exports.myOrder = async (req, res, next) => {
    try{
        res.json(await myorderServices.myorders(req.params.user_id,req.body));
    
      } 
      catch(err){
        console.error(`error while getting the my-orders`,err.message);
        next(err);
        
      }
}