const productService = require("../services/product");

exports.productById = async (req, res, next) => {
    try{
        res.json(await productService.getProduct(req.params.product_id,req.body));
    
      } 
      catch(err){
        console.error(`error while getting the questionaries`,err.message);
        next(err);
        
      }
}

