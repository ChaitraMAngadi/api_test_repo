const db = require('./db');
const helper = require('../helper');
const config = require('../config');

async function addUser(first_name,last_name,email,phone,password,otp,email_otp){
    const rows = await db.query(
      `INSERT INTO users(first_name,last_name,email,phone,password,otp,email_otp) values ('${first_name}','${last_name}','${email}','${phone}','${password}','${otp}','${email_otp}');
      `

    ) ; 
  const data = helper.emptyOrRows(rows);
  
  return{
      data,
  }
  
  }
  

  module.exports={
    addUser

} 