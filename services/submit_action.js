const db = require('./dbpromise');
const helper = require('../helper');
const config = require('../config');

  async function getSubmitActionProducts(cat_id,sub_cat_id,ques_id,option_id ){
    const rows = await db.query(
      `
      SELECT * FROM products a join 
          product_images b on a.id=b.product_id join 
          link_variant c on a.id=c.product_id join 
          user_reviews d on a.id=d.product_id JOIN
          categories e on e.id=a.cat_id JOIN
          sub_categories f on f.id=a.sub_cat_id JOIN

          questionaries g on g.sub_cat_id = a.sub_cat_id JOIN
          options h on h.ques_id=a.ques_id
          
          WHERE e.id=${cat_id} and  f.id=${sub_cat_id} and g.id=${ques_id} and h.id='${option_id}'  
           group by a.id;`

    ) ; 
  const data = helper.emptyOrRows(rows);
  
  return{
      data,
  }
  
  }
  
  

  module.exports={
    getSubmitActionProducts
    

}