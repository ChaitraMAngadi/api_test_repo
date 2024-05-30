const db = require("../services/db");


const verifyotp = (req, res) => {
    
       db.query(
        `SELECT * from users where lower(otp) = lower(${db.escape(req.body.otp)}) OR lower(email_otp)= lower(${db.escape(req.body.otp)})`,
        (err, result) => {
            if(result && result.length){
                return res.status(200).send({
                    msg:"otp verified"
                   });
            }
            else{
              return res.status(506).send({
                msg:" failed"
               })
    
            }
        }


       )

    }

module.exports = {
    verifyotp,
};