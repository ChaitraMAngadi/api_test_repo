const db = require("../services/db");
const {validationResult}= require("express-validator");


const login = (req, res) => {
    

    if(err){
        return res.status(500).send({
            msg:"This Field can not be empty ",
        });
    }
}

module.exports= {
    login,
};