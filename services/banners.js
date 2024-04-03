const db = require('./db');
const helper = require('../helper');
const config = require('../config');

async function getBanners( ){
    const rows = await db.query(
      `select * from banners WHERE position=1 and status=1 order by priority asc`
    ) ; 
  const data = helper.emptyOrRows(rows);
  
  return{
      data,
  }
  
  }
  

  module.exports={
   getBanners

}