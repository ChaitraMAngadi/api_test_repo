const db = require("../services/db");
const {validationResult}= require("express-validator");
const otpGenerator = require("otp-generator");
const jwt = require('jsonwebtoken')


const sendOtp = require("../helper/mobileotp");
const sendMail = require("../helper/sendmail");

var userdata;




const loginWithOtp = (req, res) =>{
    
    const emailOrPhone = req.body.email;

  const query = `
    SELECT CASE 
             WHEN EXISTS (SELECT 1 FROM users WHERE email = ?) THEN 1 
             WHEN EXISTS (SELECT 1 FROM users WHERE phone = ?) THEN 0 
             ELSE 2 
           END AS test;
  `;

  db.query(query, [emailOrPhone, emailOrPhone], (err, result) => {
    if (err) {
      console.error('Error executing query', err.stack);
      return res.status(500).send('Server error');
    }

    const testResult = result[0].test;
    console.log(testResult);
    
    if (testResult === 1) {
      console.log("email");
      
    } else if (testResult === 0) {
      console.log("phone");
    } else {
      console.log("none");
    }

    res.json({ test: testResult });})
    // db.query(
    //     `select case when exists(select * from users where email=${req.body.email}) 
    //     then 1 when exists(select * from users where phone=${req.body.email}) then 0
    //      else 2 end as test;
    //     `,
    //     (err, result) => {
    //         console.log(result);
    //         if(result==1){
    //             console.log("email");
    //         }
    //         else if(result == 0){
    //             console.log("phone");
    //         }
    //         else{
    //             console.log("none");
    //         }
    //     }
    // )
}





const loginWithMail = (req, res) => {
    try{
        const errors = validationResult(req);

    if(!errors.isEmpty()){
        return res.status(501).send({
            msg:errors.array(),
        });
    }
    else{
        // var useremail = req.body.email

        // return res
        //   .status(200)
        //   .json({ message: "User Logged in Successfully", token });

       db.query(
       `SELECT * from users where lower(email) = lower(${db.escape(req.body.email)})`,
       (err, result) => {
        if(result && result.length){
            console.log(result[0].id);
            userdata = result[0].id;
            const token = jwt.sign({userdata}, process.env.JWT_SECRET,)
            const OTP = otpGenerator.generate(4, {
                digits: true,
                lowerCaseAlphabets:false,
                specialChars:false,
                upperCaseAlphabets:false
                
                }) 
                
                let OTP_message = `Dear Customer, ${OTP}  is your OTP for logging in to Absolutemens.com. Happy to serve you, Team Absolutemens.com`; 
                
            sendMail(req.body.email, OTP_message );
                db.query(`UPDATE users set email_otp=?where email= ?`,[OTP, req.body.email],
                    function(err, result, fields){
                        if(err){
                            return res.status(600).send({
                                msg:err
                            });
                        }
                        return res
                        .status(200)
                        .json({ message: "User Logged in Successfully and otp is sent", token});
                        
                    }
                )
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
    catch(err){
        console.log('error',err);
    }
}


const loginWithPhone = (req, res) => {
    try{
        const errors = validationResult(req);

    if(!errors.isEmpty()){
        return res.status(502).send({
            msg:errors.array(),
        });
    }
    else{
       db.query(
        `SELECT * from users where lower(phone) = lower(${db.escape(req.body.phone)})`,
        (err, result) => {
            if(result && result.length){
                userdata = result[0].id;
                const token = jwt.sign({userdata}, process.env.JWT_SECRET,)
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
                            return res.status(601).send({
                                msg:err
                            });
                        }
                          return res
                        .status(202)
                        .json({ message: "User Logged in Successfully and otp is sent", token});
                    }
                )

                // res.status(200).send({
                //     msg:"send otp"
                //    })
            }
            else{
               res.status(503).send({
                msg:"User Does't exist"
               })
    
            }
        }


       )

    }

    }
    catch(err){
        console.log('error',err);
    }
}

module.exports= {
    loginWithMail,
    loginWithPhone,
    loginWithOtp
};