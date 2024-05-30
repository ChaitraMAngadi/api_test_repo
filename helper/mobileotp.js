const { response } = require("express");


const baseUrl = 'https://2factor.in';
const headers = {
    'Content-Type': 'application/x-www-form-urlencoded'
    
};

const sendOtp = async(phone, otp, otp_message) =>{
    try {
        
        const response = await fetch(`${baseUrl}/API/R1/`, {
            method: 'POST',
            headers: {
                ...headers,
                // 'Content-Length': postData.length
            },
            body: new URLSearchParams({
                module: 'TRANS_SMS',
                apikey: process.env.API_KEY,
                to: phone,
                from: 'abmens',
                msg:otp_message,
                // msg: 'Dear Customer {#var#} is your OTP for logging in to Absolutemens.com.Happy to serve you,Team Absolutemens.com',
                template_id: process.env.TEMPLATE_ID
            })
        });

        const data = await response.json();
        console.log(data);
        // response.status(200).send({ msg: 'OTP sent successfully', data });
    } catch (error) {
        console.error(error);
        // response.status(500).send
        // ({  msg: 'Failed to send OTP' });
    }

}

module.exports = sendOtp;