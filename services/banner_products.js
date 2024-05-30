const db = require('./dbpromise');
const helper = require('../helper');
const config = require('../config');

async function getBannerproduct(id){
    const rows = await db.query(
      `
      SELECT * FROM products a join 
    product_images b on a.id=b.product_id join 
    link_variant c on a.id=c.product_id join 
    user_reviews d on a.id=d.product_id JOIN
    banners e on a.product_tags=e.tag_id join
    attr_brands f on a.brand=f.id
    where e.tag_id='${id}' group by a.id ;
      `

    ) ; 
  const data = helper.emptyOrRows(rows);
  
  return{
      data,
  }
  
  }
  

  module.exports={
    getBannerproduct

}