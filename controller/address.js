const addressService = require("../services/address");

exports.address = async (req, res, next) => {
    try{
       await res.json(await addressService.getAddress(req.params.user_id,req.body));
        
      } 
      catch(err){
        console.error(`error while address`,err.message);
        next(err);
      }
}

exports.addAddress = async (req, res) => {
  try{

    db.query(
      `INSERT INTO user_address( user_id, name, mobile, address, locality, city, state, pincode, landmark, area, address_type, created_date, isdefault) VALUES 
      ('${req.params.user_id}','${req.body.name}','${req.body.mobile}',
      '${req.body.address}','${req.body.locality}','${req.body.city}','${req.body.state}',
      '${req.body.pincode}','${req.body.landmark}','${req.body.area}','${req.body.address_type}','${req.body.created_date}','${req.body.isdefault}')`,
      (err, result) =>{
          if(err){
              return res.status(408).send({
                  msg:err
              });
          }
          return res.status(200).send({
              msg:'User address added Successfully :',result
          });
      }                        
  
  )

  }
  catch(err){
    console.error('error while adding new address', err.message);
  }
}

exports.editAddress = async (req, res) =>{
  try{
    db.query(
      `Update user_address set name = ?, mobile = ?, address = ?, 
        locality = ?, city = ?, state = ?, pincode =?, landmark = ?,
         area =?, address_type =?, created_date =?, isdefault =?
          WHERE user_id = ?`,[req.body.name, req.body.mobile, 
            req.body.address, req.body.locality, req.body.city, req.body.state,
            req.body.pincode, req.body.landmark, req.body.area, req.body.address_type,
            req.body.created_date,req.body.isdefault,req.params.user_id ],
      (err, result) =>{
          if(err){
              return res.status(410).send({
                  msg:err
              });
          }
          return res.status(200).send({
              msg:'User address added Successfully :',result
          });
      }                        
  
  )
  }
  catch(err){
    console.error('error while editing the address',err);
  }
}

exports.deleteAddress = async (req, res) =>{
  try{
    db.query(
      `DELETE from user_address WHERE user_id = ${req.params.user_id}`,
      (err, result) =>{
          if(err){
              return res.status(408).send({

                  msg:err
              });
          }
          return res.status(200).send({
              msg:'User address deleted Successfully :',result
          });
      }                        
  
  )
  }
  catch(err){
    console.error('error while deleting the address',err);
  }
}