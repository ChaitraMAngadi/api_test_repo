const db = require('./dbpromise');
const helper = require('../helper');
const config = require('../config');

async function pendingOrders(user_id){
    const rows = await db.query(
        `select * from orders where user_id= ${user_id} and order_status = 1`
      ) ; 
    const data = helper.emptyOrRows(rows);
    
    return{
        data,
    } 
    
}
async function acceptedOrders(user_id){
    const rows = await db.query(
        `select * from orders where user_id= ${user_id} and order_status = 2`
      ) ; 
    const data = helper.emptyOrRows(rows);
    
    return{
        data,
    } 
    
}
async function assignedToCourierOrders(user_id){
    const rows = await db.query(
        `select * from orders where user_id= ${user_id} and order_status =3`
      ) ; 
    const data = helper.emptyOrRows(rows);
    
    return{
        data,
    } 
    
}
async function shippedOrders(user_id){
    const rows = await db.query(
        `select * from orders where user_id= ${user_id} and order_status =4`
      ) ; 
    const data = helper.emptyOrRows(rows);
    
    return{
        data,
    } 
    
}

module.exports={
pendingOrders,
acceptedOrders,
assignedToCourierOrders,
shippedOrders
}