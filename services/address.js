const db = require('./db');
const helper = require('../helper');
const config = require('../config');

async function getAddress(user_id ){
    const rows = await db.query(
      `select * from user_address where user_id='${user_id}'`

    ) ; 
  const data = helper.emptyOrRows(rows);
  
  return{
      data,
  }
  
  }
  

  module.exports={
    getAddress

}