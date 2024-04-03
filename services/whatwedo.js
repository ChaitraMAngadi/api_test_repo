const db = require('./db');
const helper = require('../helper');
const config = require('../config');

async function getwhatwedodata( ){
    const rows = await db.query(
      `select id,title,description from content where id='9';`

    ) ; 
  const data = helper.emptyOrRows(rows);
  
  return{
      data,
  }
  
  }
  

  module.exports={
    getwhatwedodata

}