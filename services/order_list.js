const db = require('./dbpromise');
const helper = require('../helper');
const config = require('../config');

async function userOngoingOrders(user_id){
    const rows = await db.query(
        `select * from orders where user_id= ${user_id} and order_status in (1,2,3,4)`
      ) ; 
    const data = helper.emptyOrRows(rows);
    
    return{
        data,
    } 
    
}

async function completedOrders(user_id){
    const rows = await db.query(
        `select * from orders where user_id= ${user_id} and order_status = 5`
      ) ; 
    const data = helper.emptyOrRows(rows);
    
    return{
        data,
    }
    
}

async function canceledOrders(user_id){
    const rows = await db.query(
        `select * from orders where user_id= ${user_id} and order_status = 6`
      ) ; 
    const data = helper.emptyOrRows(rows);
    
    return{
        data,
    }
    
}

async function returndOrders(user_id){
    const rows = await db.query(
        `select * from orders where user_id= ${user_id} and order_status in 7`
      ) ; 
    const data = helper.emptyOrRows(rows);
    
    return{
        data,
    }
    
}

module.exports={
    userOngoingOrders,
    completedOrders,
    canceledOrders,
    returndOrders
}