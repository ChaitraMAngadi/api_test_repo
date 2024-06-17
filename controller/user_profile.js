const myProfileService = require("../services/user_profile");

exports.userProfile = async (req, res, next) => {
    try{
        res.json(await myProfileService.getUserProfile(req.params.user_id,req.body));
    
      } 
      catch(err){
        console.error(`error while getting the user profile`,err.message);
        next(err);
        
      }
}

exports.editUserProfile = async (req, res) => {
  try{
    db.query(
      `Update users set first_name = ?, last_name = ?, email = ?, 
        phone = ?
          WHERE user_id = ?`,[req.body.first_name, req.body.last_name, 
            req.body.email, req.body.phone, req.params.user_id ],
      (err, result) =>{
          if(err){
              return res.status(408).send({
                  msg:err
              });
          }
          return res.status(200).send({
              msg:'User profile updated Successfully :',result
          });
      }                        
  
  )
  }
  catch(err){
    console.error('error while editing user profile')
  }
}