const allOrdersListService = require("../services/all_order_list");


exports.allOrderList = async (req, res, next) => {
    try{
        res.json(await allOrdersListService.getAllUserOdersList(req.params.user_id,req.body));
    
      } 
      catch(err){
        console.error(`error while getting the order-list`,err.message);
        next(err);
        
      }
}
