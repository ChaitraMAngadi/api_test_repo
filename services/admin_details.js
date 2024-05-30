const db = require('./dbpromise');
const helper = require('../helper');
const config = require('../config');

async function getAdminDetails( ){
    const rows = await db.query(
      `select email,mobile,address from admin where id=1;`
    ) ; 
  const data = helper.emptyOrRows(rows);
  
  return{
      data,
  }
  
  }
  

  module.exports={
    getAdminDetails

}