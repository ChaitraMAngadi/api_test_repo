const orderListServices = require("../services/order_list");

exports.userOngoingOrders = async (req, res, next) => {
    try{
        res.json(await orderListServices.userOngoingOrders(req.params.user_id,req.body));
    
      } 
      catch(err){
        console.error(`error while getting the ongoing-orders`,err.message);
        next(err);
        
      }
}

exports.completedOrders = async (req, res, next) => {
    try{
        res.json(await orderListServices.completedOrders(req.params.user_id,req.body));
    
      } 
      catch(err){
        console.error(`error while getting the completed-orders`,err.message);
        next(err);
        
      }
}

exports.canceledOrders = async (req, res, next) => {
    try{
        res.json(await orderListServices.canceledOrders(req.params.user_id,req.body));
    
      } 
      catch(err){
        console.error(`error while getting the canceled-orders`,err.message);
        next(err);
        
      }
}

exports.returnOrders = async (req, res, next) => {
  try{
      res.json(await orderListServices.returndOrders(req.params.user_id,req.body));
  
    } 
    catch(err){
      console.error(`error while getting the return-orders`,err.message);
      next(err);
      
    }
}