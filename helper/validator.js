const { check } = require("express-validator");
const { options } = require("../routes/app.router");

exports.signUpValidation =[
    check('first_name','Name is Required').not().isEmpty(),
    check('email','Please enter valid email').isEmail().normalizeEmail({gmail_remove_dots:true}),
    check('phone','please enter valid number').isMobilePhone(),
    
]

exports.loginEmailValidation =[
    check('email','Please enter valid email').isEmail().normalizeEmail({gmail_remove_dots:true}),
    // check('phone','please enter valid number').isMobilePhone(),
]

exports.loginPhoneValidation =[
    check('phone','please enter valid number').isMobilePhone(),
]
    