const db = require('./dbpromise');
const helper = require('../helper');
const config = require('../config');

async function getWhishList(user_id ){
    const rows = await db.query(
      `select * from whish_list where user_id= '${user_id}';`

    ) ; 
  const data = helper.emptyOrRows(rows);
  
  return{
      data,
  }
  
  }
  

  module.exports={
    getWhishList

}