const submitActionService = require("../services/submit_action");

exports.submitAction = async (req, res, next) => {
    try{
        res.json(await submitActionService.getSubmitActionProducts(req.params.cat_id,req.params.sub_cat_id,req.params.ques_id,req.params.option_id,req.body));
    
      } 
      catch(err){
        console.error(`error while getting the products`,err.message);
        next(err);
        
      }
}