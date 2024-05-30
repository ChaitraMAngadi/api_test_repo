const db = require('./dbpromise');
const helper = require('../helper');
const config = require('../config');



  async function getSkipActionProducts(cat_id,sub_cat_id ){
    const rows = await db.query(
      `
      SELECT * FROM products a join 
          product_images b on a.id=b.product_id join 
          link_variant c on a.id=c.product_id join 
          user_reviews d on a.id=d.product_id JOIN
          categories e on e.id=a.cat_id JOIN
          sub_categories f on f.id=a.sub_cat_id
          WHERE e.id='${cat_id}' and f.id='${sub_cat_id}'
           group by a.id;`

    ) ; 
  const data = helper.emptyOrRows(rows);
  
  return{
      data,
  }
  
  }
  
  

  module.exports={
    getSkipActionProducts
   

}