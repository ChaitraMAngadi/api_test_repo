const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const db = require('../services/db');
const config =  require('../config');
const helper = require("../helper");

router.post('/register', async (req, res) =>{
    try{
        const {first_name,last_name,email,phone,password } = req.body;                                                                                                                                                                                                                                                                                                                   
        const hashedPassword = await bcrypt.hash(password, 10);
        const rows = await db.query(
            'INSERT into users (first_name,last_name,email,phone,password) VALUES (?,?,?,?,?)',
            [first_name,last_name,email,phone,hashedPassword]);
            res.status(201).json({ message: 'User Registered Successfully'});

            const data = helper.emptyOrRows(rows);
  
            return{
                data,
            }
    } catch(error) {
        console.error('Error registering user:',error);
        res.status(400).json({message: 'Server Error'});
    }
});

router.post('/login',async (req, res) => {
    try{
        const {email, password} = req.body;
        const [rows ,fields] = await db.query('SELECT * From users WHERE email =?',[email]);
        if(rows.length === 0){
            return res.status(401).json({message:'Invalid user'});
        }
        const user=rows[0];
        const isPasswordMatch = await bcrypt.compare(password, user.password);
        if(!isPasswordMatch){
            return res.status(401).json({message:'Invalid user'});
        }
        const token = jwt.sign({userId : user.id}, 'your-sectrat-key',{expiresIn:'2h'});
        res.json({token});
    }
    catch(error){
        console.error('Error while logging in:', error);
        res.status(400).json({message:'server error'});
    }
});


module.exports= router