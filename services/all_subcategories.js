const db = require('./dbpromise');
const helper = require('../helper');
const config = require('../config');

async function getAllSubCategories( ){
    const rows = await db.query(
      `SELECT * FROM sub_categories WHERE STATUS=1;`
    ) ; 
  const data = helper.emptyOrRows(rows);
  
  return{
      data,
  }
  
  }

  async function getSubCategoriesById(id){
    const rows = await db.query(
      `
      SELECT * FROM sub_categories WHERE cat_id='${id}';
      `

    ) ; 
  const data = helper.emptyOrRows(rows);
  
  return{
      data,
  }
  
  }
  

  module.exports={
    getAllSubCategories,
    getSubCategoriesById

}