const db = require('./db');
const helper = require('../helper');
const config = require('../config');

async function getOderDetails(order_id ){
    const rows = await db.query(
      `select * from orders where id='${order_id}'`

    ) ; 
  const data = helper.emptyOrRows(rows);
  
  return{
      data,
  }
  
  }
  

  module.exports={
    getOderDetails

}