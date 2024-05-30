const db = require("../services/db");
const {validationResult}= require("express-validator");
const otpGenerator = require("otp-generator");

const sendOtp = require("../helper/mobileotp");
const sendMail = require("../helper/sendmail");


const loginWithOtp = (req, res) =>{
    db.query(
        `select case when exists(select * from users where email=${req.body.email}) 
        then 1 when exists(select * from users where phone=${req.body.email}) then 0
         else 2 end as test;
        `,
        (err, result) => {
            console.log(result);
            if(result==1){
                console.log("email");
            }
            else if(result == 0){
                console.log("phone");
            }
            else{
                console.log("none");
            }
        }
    )
}





const loginWithMail = (req, res) => {
    const errors = validationResult(req);

    if(!errors.isEmpty()){
        return res.status(500).send({
            msg:errors.array(),
        });
    }
    else{
       db.query(
       `SELECT * from users where lower(email) = lower(${db.escape(req.body.email)})`,
       (err, result) => {
        if(result && result.length){
            const OTP = otpGenerator.generate(4, {
                digits: true,
                lowerCaseAlphabets:false,
                specialChars:false,
                upperCaseAlphabets:false
                
                }) 
                
                let OTP_message = `Dear Customer, ${OTP}  is your OTP for logging in to Absolutemens.com. Happy to serve you, Team Absolutemens.com`; 
                
            sendMail(req.body.email, OTP_message );
                db.query(`UPDATE users set email_otp=? where email= ?`,[OTP, req.body.email],
                    function(err, result, fields){
                        if(err){
                            return res.status(600).send({
                                msg:err
                            });
                        }
                        return res.status(200).send({
                            msg:"Otp send Successfully:",result
                        });
                    }
                )

                // res.status(200).send({
                //     msg:"send otp"
                //    })
            }
            else{
                res.status(506).send({
                 msg:"User Does't exist"
                })
     
             }
           
        }
       

// `SELECT CASE WHEN lower(email) = lower(${db.escape(req.body.email)}) 'A' 
// WHEN lower(phone) = lower(${db.escape(req.body.email)}) 'B' `,

//         (err, result) => {
//             if(result == 'A' && result.length){
//                 res.status(200).send({
//                     msg:"send  email otp"
//                    })
//             }
//             else if(result == 'B' && result.length){
//                 res.status(200).send({
//                     msg:"send  phone otp"
//                    })
//             }
//             else {
//                res.status(506).send({
//                 msg:"User Does't exist"
//                })
    
//             }
//         }


       )

    }
}


const loginWithPhone = (req, res) => {
    const errors = validationResult(req);

    if(!errors.isEmpty()){
        return res.status(500).send({
            msg:errors.array(),
        });
    }
    else{
       db.query(
        `SELECT * from users where lower(phone) = lower(${db.escape(req.body.phone)})`,
        (err, result) => {
            if(result && result.length){
                const OTP = otpGenerator.generate(4, {
                    digits: true,
                    lowerCaseAlphabets:false,
                    specialChars:false,
                    upperCaseAlphabets:false
                    
                    }) 
                    
                    let OTP_message = `Dear Customer, ${OTP}  is your OTP for logging in to Absolutemens.com. Happy to serve you, Team Absolutemens.com`; 
                    
                sendOtp(req.body.phone,OTP, OTP_message, res );
                db.query(`UPDATE users set otp=? where phone= ?`,[OTP, req.body.phone],
                    function(err, result, fields){
                        if(err){
                            return res.status(600).send({
                                msg:err
                            });
                        }
                        return res.status(200).send({
                            msg:"Otp send Successfully:",result
                        });
                    }
                )

                // res.status(200).send({
                //     msg:"send otp"
                //    })
            }
            else{
               res.status(506).send({
                msg:"User Does't exist"
               })
    
            }
        }


       )

    }
}

module.exports= {
    loginWithMail,
    loginWithPhone,
    loginWithOtp
};