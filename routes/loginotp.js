const express = require("express");
const router = express.Router();

const otpGenerator = require("otp-generator");
const db = require("../services/db");


const baseUrl = 'https://2factor.in';

const options = {
    hostname: '2factor.in',
    maxRedirects: 20
};
const headers = {
    'Content-Type': 'application/x-www-form-urlencoded'
    
};

const otp = otpGenerator.generate(4, {
digits: true,
lowerCaseAlphabets:false,
specialChars:false,
upperCaseAlphabets:false

}) 

let otp_message = `Dear Customer, ${otp}  is your OTP for logging in to Absolutemens.com. Happy to serve you, Team Absolutemens.com`; 

router.post('/send-otp', async (req, res) => {
    const { phoneNumber } = req.body;

    // const postData = qs.stringify({
    //     module: 'TRANS_SMS',
    //     apikey: process.env.API_KEY,
    //     to: phoneNumber,
    //     from: 'abmens',
    //     template_id:'1407167151617392747',
    //     msg: 'Dear Customer {#var#} is your OTP for logging in to Absolutemens.com.Happy to serve you,Team Absolutemens.com'

    // });

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
                to: phoneNumber,
                from: 'abmens',
                msg:otp_message,
                // msg: 'Dear Customer {#var#} is your OTP for logging in to Absolutemens.com.Happy to serve you,Team Absolutemens.com',
                template_id: process.env.TEMPLATE_ID
            })
        });

        const data = await response.json();
        console.log(data);
        res.status(200).json({ success: true, message: 'OTP sent successfully', data });
        db.query(
            `UPDATE users set otp= ? where phone = ? `,[otp,phoneNumber]
        )
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: 'Failed to send OTP', error: error.message });
    }
});

// Route to verify OTP
router.post('/verify-otp', async (req, res) => {
    const {  otpInput } = req.body;

    // const postData = qs.stringify({
    //     session_id: sessionId,
    //     otp_input: otpInput
    // });

    try {
        const response = await fetch(`${baseUrl}/API/V1/SMS/VERIFY`, {
            method: 'POST',
            headers: {
                ...headers,
                'Content-Length': postData.length
            },
            body: postData
        });

        const data = await response.json();
        console.log(data);

        if (data.Status === 'Success') {
            res.status(200).json({ success: true, message: 'OTP verified successfully' });
        } else {
            res.status(400).json({ success: false, message: 'Invalid OTP' });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: 'Failed to verify OTP', error: error.message });
    }
});

module.exports = router;

// // Route to send OTP
// router.post('/send-otp', (req, res) => {
//     const { phoneNumber } = req.body;

//     const postData = qs.stringify({
//         module: 'TRANS_SMS',
//         apikey:process.env.API_KEY,
//         to: phoneNumber,
//         from: 'absmen',
//         msg: 'Your OTP code is %OTP%'
//     });

//     const reqOptions = {
//         ...options,
//         method: 'POST',
//         path: 'API/R1/',
//         headers: {
//             'Content-Type': postData,
//             'Content-Length': postData.length
//         }
//     };

//     const request = https.request(reqOptions, (response) => {
//         let chunks = [];

//         response.on("data", (chunk) => {
//             chunks.push(chunk);
//         });

//         response.on("end", () => {
//             const body = Buffer.concat(chunks).toString();
//             console.log(body);
//             res.status(200).json({ success: true, message: 'OTP sent successfully', data: JSON.parse(body) });
//         });

//         response.on("error", (error) => {
//             console.error(error);
//             res.status(500).json({ success: false, message: 'Failed to send OTP', error: error.message });
//         });
//     });

//     request.write(postData);
//     request.end();
// });

// // Route to verify OTP
// router.post('/verify-otp', (req, res) => {
//     const { sessionId, otpInput } = req.body;

//     const postData = qs.stringify({
//         session_id: sessionId,
//         otp_input: otpInput
//     });

//     const reqOptions = {
//         ...options,
//         method: 'POST',
//         path: '/API/V1/SMS/VERIFY',
//         headers: {
//             'Content-Type': 'application/x-www-form-urlencoded',
//             'Content-Length': postData.length
//         }
//     };

//     const request = https.request(reqOptions, (response) => {
//         let chunks = [];

//         response.on("data", (chunk) => {
//             chunks.push(chunk);
//         });

//         response.on("end", () => {
//             const body = Buffer.concat(chunks).toString();
//             console.log(body);
//             const parsedBody = JSON.parse(body);

//             if (parsedBody.Status === 'Success') {
//                 res.status(200).json({ success: true, message: 'OTP verified successfully' });
//             } else {
//                 res.status(400).json({ success: false, message: 'Invalid OTP' });
//             }
//         });

//         response.on("error", (error) => {
//             console.error(error);
//             res.status(500).json({ success: false, message: 'Failed to verify OTP', error: error.message });
//         });
//     });

//     request.write(postData);
//     request.end();
// });

// module.exports = router;
