const relatedProductsService = require("../services/related_products");

exports.relatedProduct = async (req, res, next) => {
    try{
        res.json(await relatedProductsService.getRelatedProducts(req.params.cat_id,req.body));
    
      } 
      catch(err){
        console.error(`error while getting the related products`,err.message);
        next(err);
        
      }
}