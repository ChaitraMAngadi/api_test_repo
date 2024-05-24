const { check } = require("express-validator");

exports.signUpValidation =[
    check('first_name','Name is Required').not().isEmpty(),
    check('email','Please enter valid email').isEmail().normalizeEmail({gmail_remove_dots:true}),
    check('phone','please enter valid number').isMobilePhone(),
    
]

exports.loginValidation =[
    check('input','This field can not be empty').not().isEmpty(),
]