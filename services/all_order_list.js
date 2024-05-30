const db = require('./dbpromise');
const helper = require('../helper');
const config = require('../config');

async function getAllUserOdersList(user_id ){
    const rows = await db.query(
      `select * from orders where user_id='${user_id}'`

    ) ; 
  const data = helper.emptyOrRows(rows);
  
  return{
      data,
  }
  
  }
  

  module.exports={
    getAllUserOdersList

}