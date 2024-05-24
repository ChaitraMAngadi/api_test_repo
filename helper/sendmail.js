const nodemailer = require('nodemailer');
const { SMTP_MAIL, SMTP_PASSWORD, SMTP_PORT} = process.env;

const sendMail = async(email, mailSubject, content) =>{
    try{
        const transport = nodemailer.createTransport({
            host : 'smtp.gmail.com',
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
            subject: mailSubject,
            html: content
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

