const productListService = require("../services/product_list");

exports.productList = async (req, res, next) => {
    try{
        res.json(await productListService.getMultiple(req));
    
      } 
      catch(err){
        console.error(`error while getting the product list`,err.message);
        next(err);
      }
}

exports.topDeals = async (req, res, next) => {
    try{
        res.json(await productListService.getMultipleTopdeals(req));
    }
    catch(err){
        console.error(`error while getting the top-deals product list`,err.message);
        next(err);
      }
}

exports.newArrivals = async (req, res, next) => {
    try{
        res.json(await productListService.getNewArrivals(req));
    }
    catch(err){
        console.error(`error while getting the new-arrivals from product list`,err.message);
        next(err);
      }
}

exports.trendingOffers = async (req, res, next) => {
    try{
        res.json(await productListService.getTrendingOffers(req));
    }
    catch(err){
        console.error(`error while getting the trending-offers from product list`,err.message);
        next(err);
      }
}