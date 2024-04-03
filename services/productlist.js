const db = require('./db');
const helper = require('../helper');
const config = require('../config');

async function getMultiple( ){
  const rows = await db.query(
    `SELECT id,seo_url,name,descp,cat_id,sub_cat_id,ques_id,option_id,brand,mrp,sku,gst,tax_class,tax,taxname,stock,manage_stock,variant_product,filters,shop_id,status,created_at,updated_at,
    meta_tag_title,meta_tag_description,meta_tag_keywords,product_tags,admin_commission,parent_id,key_features,about,how_to_use,selling_date,cancel_status,
    return_status,return_noof_days,top_deal,cart_limit,priority,package_weight,package_length,package_height,status_manage_by,delete_status,orders_placed FROM products`
  ) ; 
const data = helper.emptyOrRows(rows);

return{
    data,
}

}

async function getMultipleTopdeals(){
    const rows = await db.query(
    `SELECT * FROM products a join 
    product_images b on a.id=b.product_id join  
    link_variant c on a.id=c.product_id join 
    user_reviews d on a.id=d.product_id 
    where a.top_deal='yes' and a.status=1 and a.availabile_stock_status='available' group by a.id`


    );
    const data=helper.emptyOrRows(rows);

    return{
        data,
    }
}

async function getNewArrivals(){
  const rows = await db.query(
  

  `SELECT * FROM products a join 
  product_images b on a.id=b.product_id join 
  link_variant c on a.id=c.product_id join 
  user_reviews d on a.id=d.product_id 
  where a.top_deal='no' and a.status=1 and a.availabile_stock_status='available' group by a.id`

  );
  const data=helper.emptyOrRows(rows);

  return{
      data,
  }
}

async function getTrendingOffers(){
  const rows = await db.query(
 

`SELECT * FROM products a join 
product_images b on a.id=b.product_id join 
link_variant c on a.id=c.product_id join 
user_reviews d on a.id=d.product_id join 
most_viewed_products e on a.id=e.product_id
 GROUP by a.id;`

  
  );
  const data=helper.emptyOrRows(rows);

  return{
      data,
  }
}



module.exports={
    getMultiple,
    getMultipleTopdeals,
    getNewArrivals,
    getTrendingOffers

}
