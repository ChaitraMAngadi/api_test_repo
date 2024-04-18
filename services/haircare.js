const db = require('./db');
const helper = require('../helper');
const config = require('../config');

async function getHairCareProductList( ){
    const rows = await db.query(
      ` SELECT * FROM products a join 
      product_images b on a.id=b.product_id join  
      link_variant c on a.id=c.product_id join 
      user_reviews d on a.id=d.product_id 
       
   where cat_id='50' group by a.id ;`
    ) ; 
  const data = helper.emptyOrRows(rows);
  
  return{
      data,
  }
  
  }
  

  module.exports={
    getHairCareProductList

}