const db = require('./dbpromise');
const helper = require('../helper');
const config = require('../config');

async function myorders(user_id ){
    const rows = await db.query(
      `select * from orders where user_id='${user_id}' and payment_status=1 group by session_id order by id desc`

    ) ; 
  const data = helper.emptyOrRows(rows);
  
  return{
      data,
  }
  
  }
  

  module.exports={
    myorders

}