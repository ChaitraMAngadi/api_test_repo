const db = require('./dbpromise');
const helper = require('../helper');
const config = require('../config');

async function getHealtAndWellnesProductList( ){
    const rows = await db.query(
      ` SELECT * FROM products a join 
      product_images b on a.id=b.product_id join  
      link_variant c on a.id=c.product_id join 
      user_reviews d on a.id=d.product_id 
       
   where a.cat_id='54' group by a.id ;`
    ) ;  
  const data = helper.emptyOrRows(rows);
  
  return{
      data,
  }
  
  }
  

  module.exports={
    getHealtAndWellnesProductList

}