
const db = require('./dbpromise');
const helper = require('../helper');
const config = require('../config');



  async function getProduct(id){
    const rows = await db.query(
      `
      
SELECT * FROM attributes_values a right outer join 
products f on a.id in 
(SELECT TRIM('"' FROM (JSON_EXTRACT((TRIM(']' FROM (TRIM('[' FROM jsondata)))),"$.attribute_value")))
 from link_variant WHERE product_id=f.id ) join
  product_images b on f.id=b.product_id join 
  link_variant c on f.id=c.product_id join
   user_reviews d on f.id=d.product_id join
    most_viewed_products e on f.id=e.product_id 
    WHERE f.id=${id} GROUP BY f.id;
     `
    ) ; 
  const data = helper.emptyOrRows(rows);
  
  return{
      data,
  }
  
  }
  
  

  module.exports={
    getProduct
   

}


