const nodemailer = require('nodemailer');
const { SMTP_MAIL, SMTP_PASSWORD, SMTP_PORT, SMTP_HOST} = process.env;

const sendMail = async(email, mailSubject) =>{
    try{
        const transport = nodemailer.createTransport({
            host : SMTP_HOST,
            port : SMTP_PORT,
            secure:false,
            requireTLS: true,
            auth :{
                user:SMTP_MAIL,
                pass:SMTP_PASSWORD
            }
        });
        
        const mailOptions = {
            from : SMTP_MAIL,
            to: email,
            subject: "LOGIN OTP",
            html: mailSubject
        }

        transport.sendMail(mailOptions , function(err, info){
            if(err){
                console.log(err);
            }
            else{
                console.log("Mail sent successfully:",info.response);

            }
        } );
    }
    catch(err){
        console.log(err.message)
    }
}

module.exports= sendMail;

