const db = require('./db');
const helper = require('../helper');
const config = require('../config');

async function getMainCategories( ){
    const rows = await db.query(
      `select * from categories where status=1 order by priority asc`
    ) ; 
  const data = helper.emptyOrRows(rows);
  
  return{
      data,
  }
  
  }
  

  module.exports={
    getMainCategories

}