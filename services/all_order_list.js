const db = require('./db');
const helper = require('../helper');
const config = require('../config');

async function getAllOdersList(user_id ){
    const rows = await db.query(
      `select * from orders where id='${user_id}'`

    ) ; 
  const data = helper.emptyOrRows(rows);
  
  return{
      data,
  }
  
  }
  

  module.exports={
    getAllOdersList

}