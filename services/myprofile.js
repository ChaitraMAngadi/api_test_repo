const db = require('./db');
const helper = require('../helper');
const config = require('../config');

async function getMyProfile(user_id ){
    const rows = await db.query(
      `select * from users where id= '${user_id}';`

    ) ; 
  const data = helper.emptyOrRows(rows);
  
  return{
      data,
  }
  
  }
  

  module.exports={
    getMyProfile

}