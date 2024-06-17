const db = require('./dbpromise');
const helper = require('../helper');
const config = require('../config');

async function getSearch( keyword ){
    const rows = await db.query(
      `SET @keyword = ${keyword};
      SELECT p.*
      FROM products p
      LEFT JOIN categories c ON p.cat_id = c.id
      LEFT JOIN sub_categories sc ON p.sub_cat_id = sc.id
      LEFT JOIN tags t ON p.product_tags = t.id
      LEFT JOIN attr_brands ab ON p.brand = ab.id
      LEFT JOIN options o ON p.option_id = o.id
      LEFT JOIN product_filter po ON p.id=po.product_id
      LEFT JOIN filter_options fo ON po.filter_options = fo.id
      WHERE c.category_name = @keyword
         OR sc.sub_category_name = @keyword
         OR t.title = @keyword
         OR ab.brand_name = @keyword
         OR o.option = @keyword
         OR fo.options = @keyword
         OR po.filter_options=@keyword GROUP by p.name;`

    ) ; 
  const data = helper.emptyOrRows(rows);
  
  return{
      data,
  }
  
  }
  

  module.exports={
    getSearch

}