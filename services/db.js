var mysql = require("mysql2");
const config = require('../config');

// async function query(sql, params) {
//     const connection = await mysql.createConnection(config.db);
//     const [results, ] = await connection.execute(sql, params);
  
//     return results;
//   }
  
//   module.exports = {
//     query
//   }

var conn = mysql.createConnection(config.db);

conn.connect(function(err){
  if(err) throw err;
  console.log('Database connected sucessfully');
});

module.exports = conn;




