const db = require('./dbpromise');
const helper = require('../helper');
const config = require('../config');

  async function addToCart(user_id,product_id ){
    const rows = await db.query(
      `
      INSERT INTO cart (session_id, variant_id, vendor_id, user_id, price, quantity, unit_price, status, cart_status, check_out)
      SELECT
          CASE
              WHEN EXISTS (SELECT session_id FROM cart WHERE user_id = u.id LIMIT 1)
                  THEN (SELECT session_id FROM cart WHERE user_id = u.id LIMIT 1)
              ELSE CONCAT(DATE_FORMAT(NOW(), '%y%m'), '-', DATE_FORMAT(NOW(), '%d%i%s'), '-', FLOOR(RAND() * (999 - 111 + 1)) + 111)
          END AS session_id,
          v.id,
          p.shop_id,
          u.id,
          v.price,
          1 AS quantity,
          v.saleprice,
          0 AS status,
          0 AS cart_status,
          1 AS check_out
      FROM
          users u
      JOIN
          products p
      JOIN
          link_variant v ON p.id = v.product_id
      WHERE
          u.id = ${user_id} AND p.id = ${product_id};
      `

    ) ; 
  const data = helper.emptyOrRows(rows);
  
  return{
      data,
  }
  
  }
  
  

  module.exports={
    addToCart

}