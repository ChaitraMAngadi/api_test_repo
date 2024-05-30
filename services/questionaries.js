const db = require('./dbpromise');
const helper = require('../helper');
const config = require('../config');

async function getQuestionaries( ){
    const rows = await db.query(
      `select * from options as p INNER JOIN questionaries WHERE status =1 GROUP BY ques_id;`

    ) ; 
  const data = helper.emptyOrRows(rows);
  
  return{
      data,
  }
  
  }

  async function getQuestionariesById(cat_id,sub_cat_id ){
    const rows = await db.query(
      `select * from options as p INNER JOIN questionaries as a on p.ques_id = a.id 
      where a.cat_id= '${cat_id}' and a.sub_cat_id= '${sub_cat_id}';`

    ) ; 
  const data = helper.emptyOrRows(rows);
  
  return{
      data,
  }
  
  }
  
  

  module.exports={
    getQuestionaries,
    getQuestionariesById

}