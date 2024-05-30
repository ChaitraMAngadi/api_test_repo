const db = require('./dbpromise');
const helper = require('../helper');
const config = require('../config');

async function getRelatedProducts(cat_id){
    const rows = await db.query(
      `
      
SELECT * FROM products a join 
product_images b on a.id=b.product_id join 
link_variant c on a.id=c.product_id join 
user_reviews d on a.id=d.product_id 
where a.cat_id=${cat_id} and a.status=1 and a.availabile_stock_status='available' group by a.id
      `

    ) ; 
  const data = helper.emptyOrRows(rows);
  
  return{
      data,
  }
  
  }
  

  module.exports={
    getRelatedProducts

}