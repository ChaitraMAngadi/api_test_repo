const {validationResult}= require("express-validator");
const bcrypt = require("bcryptjs");
 const db = require("../services/db");

 const register = (req, res) => {
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(405).json({
            errors:errors.array()
        });
    }
    db.query(
        `SELECT * from users where lower(email) = lower(${db.escape(req.body.email)}) OR lower(phone) =lower(${db.escape(req.body.phone)})`,
    (err, result) => {
        if(result && result.length) {
            return  res.status(406).send({
                msg: "This user is already in use!"
            });

        }
        else{
            bcrypt.hash(req.body.password,10,
            (err, hash) => {
                if(err){
                    return res.status(407).send({
                        msg:console.log(err),
                    });
                }
                else{
                    db.query(
                        `INSERT into users (first_name,last_name,email,phone,password) VALUES 
                        ('${req.body.first_name}','${req.body.last_name}','${req.body.email}','${req.body.phone}','${hash}')`,
                        (err, result) =>{
                            if(err){
                                return res.status(408).send({
                                    msg:err
                                });
                            }
                            return res.status(200).send({
                                msg:'User Resgistered Successfully :',result
                            });
                        }                        
                    
                    )
                }
            });
        }
    }
    )
 }

 module.exports={
    register,
 }