const db = require('./db');
const helper = require('../helper');
const config = require('../config');

async function getPartnersList( ){
    const rows = await db.query(
      `select * from our_partners;`
    ) ; 
  const data = helper.emptyOrRows(rows);
  
  return{
      data,
  }
  
  }
  

  module.exports={
    getPartnersList

}