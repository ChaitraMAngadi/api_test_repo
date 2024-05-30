const onGoingOrdersServices = require("../services/on_going_orders");

exports.pendingOrders = async (req, res, next) => {
    try{
        res.json(await onGoingOrdersServices.pendingOrders(req.params.user_id,req.body));
    
      } 
      catch(err){
        console.error(`error while getting the pending-orders`,err.message);
        next(err);
        
      }
}
exports.acceptedOrders = async (req, res, next) => {
    try{
        res.json(await onGoingOrdersServices.acceptedOrders(req.params.user_id,req.body));
    
      } 
      catch(err){
        console.error(`error while getting the proccessing-orders`,err.message);
        next(err);
        
      }
}
exports.assignedToCourierOrders = async (req, res, next) => {
    try{
        res.json(await onGoingOrdersServices.assignedToCourierOrders(req.params.user_id,req.body));
    
      } 
      catch(err){
        console.error(`error while getting the assignedtopickup-orders`,err.message);
        next(err);
        
      }
}
exports.shippedOrders = async (req, res, next) => {
    try{
        res.json(await onGoingOrdersServices.shippedOrders(req.params.user_id,req.body));
    
      } 
      catch(err){
        console.error(`error while getting the delivery-orders`,err.message);
        next(err);
        
      }
}