const searchService = require("../services/search");

exports.search = async (req, res, next) => {
    try{
        res.json(await searchService.getSearch(req.params.keyword,req.body));
    
      } 
      catch(err){
        console.error(`error while getting the search products`,err.message);
        next(err);
        
      }
}