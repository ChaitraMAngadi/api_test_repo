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
    //     `SELECT id,seo_url,name,descp,cat_id,sub_cat_id,ques_id,option_id,brand,mrp,sku,gst,tax_class,tax,taxname,stock,manage_stock,variant_product,filters,shop_id,status,created_at,updated_at,
    // meta_tag_title,meta_tag_description,meta_tag_keywords,product_tags,admin_commission,parent_id,key_features,about,how_to_use,selling_date,cancel_status,
    // return_status,return_noof_days,top_deal,cart_limit,priority,package_weight,package_length,package_height,status_manage_by,delete_status,orders_placed FROM products where top_deal='yes'`
    
    // `SELECT * FROM products where top_deal='yes'`
    // `select * from banners WHERE position=1 and status=1 order by priority asc`
    // `select * from categories where status=1 order by priority asc`
    `select * from sub_categories where cat_id='50'`
    // `select * from sub_categories where sub_category_name='shampoo'`
    );
    const data=helper.emptyOrRows(rows);

    return{
        data,
    }
}

module.exports={
    getMultiple,
    getMultipleTopdeals
}

async function create(productList){

}