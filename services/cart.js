const db = require('./dbpromise');
const helper = require('../helper');
const config = require('../config');

async function getCartData(user_id,session_id ){
    const rows = await db.query(
      `
      select * from cart where session_id='${session_id}' and user_id='${user_id}';
      `

    ) ; 
  const data = helper.emptyOrRows(rows);
  
  return{
      data,
  }
  
  }
  

  module.exports={
    getCartData

}