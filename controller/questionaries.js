const questionariesService = require("../services/questionaries");

exports.questionaries = async (req, res, next) => {
    try{
        res.json(await questionariesService.getQuestionaries(req));
    
      } 
      catch(err){
        console.error(`error while getting the questionaries`,err.message);
        next(err);
        
      }
}

exports.questionariesById = async (req, res, next) => {
    try{
        res.json(await questionariesService.getQuestionariesById(req.params.cat_id,req.params.sub_cat_id,req.body));
    
      } 
      catch(err){
        console.error(`error while getting the questionaries`,err.message);
        next(err);
        
      }
}