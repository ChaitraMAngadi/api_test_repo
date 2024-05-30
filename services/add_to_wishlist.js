const db = require('./dbpromise');
const helper = require('../helper');
const config = require('../config');

async function addToWishList(id){
    const rows = await db.query(
      `
      INSERT INTO whish_list (variant_id, user_id, created_date)
SELECT l.id, 542, CURRENT_DATE() AS CurrentDate
FROM link_variant l
WHERE l.product_id = ${id};
      `

    ) ; 
  const data = helper.emptyOrRows(rows);
  
  return{
      data,
  }
  
  }
  

  module.exports={
    addToWishList

}