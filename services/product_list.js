const db = require('./db');
const helper = require('../helper');
const config = require('../config');

async function getMultiple( ){
  const rows = await db.query(
    `SELECT * FROM products a join 
    product_images b on a.id=b.product_id join  
    link_variant c on a.id=c.product_id join 
    user_reviews d on a.id=d.product_id 
     group by a.id`
 ) ; 
const data = helper.emptyOrRows(rows);

return{
    data,
}

}

async function getMultipleTopdeals(){
    const rows = await db.query(
    // `SELECT * FROM products a join 
    // product_images b on a.id=b.product_id join  
    // link_variant c on a.id=c.product_id join 
    // user_reviews d on a.id=d.product_id 
    // where a.top_deal='yes' and a.status=1 and a.availabile_stock_status='available' group by a.id`
    `  SELECT * FROM products a join 
    product_images b on a.id=b.product_id join  
    link_variant c on a.id=c.product_id join 
    user_reviews d on a.id=d.product_id join 
    attr_brands e on a.brand=e.id
    where a.top_deal='yes' and a.status=1 and a.availabile_stock_status='available' group by a.id
`

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
  user_reviews d on a.id=d.product_id join
  attr_brands e on a.brand=e.id
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
attr_brands f on a.brand=f.id join
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
