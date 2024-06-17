const {validationResult}= require("express-validator");
const bcrypt = require("bcryptjs");
 const db = require("../services/db");
 

 const register = (req, res) => {
   try{
    
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(405).json({
            errors:errors.array(),
        });
    }

    // console.log("$$$$$$$$$$$$$$$$$",errors);
    db.query(
        `SELECT * from users where lower(email) = lower(${db.escape(req.body.email)}) OR lower(phone) =lower(${db.escape(req.body.phone)})`,

    (err, result) => {
        // console.log('result',result)
        if(result && result.length) {
            return  res.status(406).send({
                msg: "This user is already in use!"
            });

        }
        // else{
        //     bcrypt.hash(req.body.password,10,
        //     (err, hash) => {
        //         if(err){
        //             return res.status(407).send({
        //                 msg:console.log(err),
        //             });
        //         }
                else{
                    console.log('user trying to register');
                    db.query(
                        `INSERT into users (first_name,last_name,email,phone) VALUES 
                        ('${req.body.first_name}','${req.body.last_name}','${req.body.email}','${req.body.phone}')`,
                        (err, result) =>{
                            if(err){
                                return res.status(408).send({
                                    msg:err
                                });
                            }
                            return res.status(201).send({
                                msg:'User Resgistered Successfully :',result
                            });
                        }                        
                    
                    )
                }
            });
   }
   catch(err){ 
    console.log('err',err);
   }
        }
    // }
    // )
//  }

 module.exports={
    register,
 }