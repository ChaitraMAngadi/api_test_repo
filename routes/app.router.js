const express = require("express");
const router = express.Router();

const { signUpValidation } = require("../helper/validator");
const { loginEmailValidation } = require("../helper/validator");
const { loginPhoneValidation } = require("../helper/validator");
const { authenticateToken } = require("../middleware/authtoken");


const userController = require("../controller/user_controller");
const loginController = require("../controller/login_controller");
const verifyOtpController = require("../controller/otp_verify");

const addressController = require("../controller/address");
const addToCartController = require("../controller/add_to_cart");
const addToWishlistController = require("../controller/add_to_wishlist");
const adminDetailsController = require("../controller/admin_details");
const allOrderListController = require("../controller/all_order_list");
const myOrderController = require("../controller/my_order");
const orderListController = require("../controller/order_list");
const ongoingOrdersController = require("../controller/on_going_orders");
const allSubcategoriesController = require("../controller/all_subcategories");
const bannerProductsController = require("../controller/banner_products");
const bannerController = require("../controller/banners");
const beardCareController = require("../controller/beard_care");
const bodyCareController = require("../controller/body_care");
const cartController = require("../controller/cart");
const faceCareController = require("../controller/face_care");
const fittnessController = require("../controller/fittness");
const hairCareController = require("../controller/hair_care");
const healthAndWellnessController = require("../controller/health_and_wellness");
const mainCategoriesController = require("../controller/main_categories");
const userProfileController = require("../controller/user_profile");
const orderDetailsController = require("../controller/order_details");
const partnerListController = require("../controller/partners_list");
const productListController = require("../controller/product_list");
const productController = require("../controller/product");
const questionariesController = require("../controller/questionaries");
const relatedProductsController = require("../controller/related_products");
const skipActionController = require("../controller/skip_action");
const submitActionController = require("../controller/submit_action");
const whatWeDoController = require("../controller/what_we_do");
const whishlistController = require("../controller/whishlist");
const searchController = require("../controller/search");



router.post('/sign-up',signUpValidation,userController.register);
router.post('/log-in/email-otp',loginEmailValidation, loginController.loginWithMail),
router.post('/log-in/phone-otp',loginPhoneValidation, loginController.loginWithPhone),
router.post('/log-in-otp', loginController.loginWithOtp),
router.post('/verify-otp', verifyOtpController.verifyotp),

router.get("/address/:user_id",addressController.address);
router.post("/addaddress/:user_id",addressController.addAddress);
router.put("/editaddress/:user_id",addressController.editAddress);
router.delete("/deleteaddress/:user_id",addressController.deleteAddress);

router.get("/addtocart/:user_id/:product_id",addToCartController.addToCart);
router.get("/addtowishlist/:id",addToWishlistController.addToWishlist);
router.get("/admindetails",authenticateToken,adminDetailsController.adminDetails);
router.get("/allorders/:user_id",authenticateToken,allOrderListController.allOrderList);
router.get("/myorder/:user_id",authenticateToken,myOrderController.myOrder);
router.get("/ongoingorders/:user_id",authenticateToken,orderListController.userOngoingOrders);
router.get("/completedorders/:user_id",authenticateToken,orderListController.completedOrders);
router.get("/canceledorders/:user_id",authenticateToken,orderListController.canceledOrders);
router.get("/returnorders/:user_id",authenticateToken,orderListController.returnOrders);
router.get("/pendingorders/:user_id",authenticateToken,ongoingOrdersController.pendingOrders);
router.get("/acceptedgorders/:user_id",authenticateToken,ongoingOrdersController.acceptedOrders);
router.get("/assignedtocourierorders/:user_id",authenticateToken,ongoingOrdersController.assignedToCourierOrders);
router.get("/shippedorders/:user_id",authenticateToken,ongoingOrdersController.shippedOrders);
router.get("/allsubcategories",allSubcategoriesController.allSubCategories);
router.get("/subcategoriesById/:id",allSubcategoriesController.SubCategoriesById);
router.get("/bannerproducts/:id",bannerProductsController.bannerProduct);
router.get("/banners",bannerController.banners);
router.get("/beardcare",beardCareController.beardCare);
router.get("/bodycare",bodyCareController.bodyCare);
router.get("/cart",authenticateToken,cartController.cart);
router.get("/facecare",faceCareController.faceCare);
router.get("/fittness",fittnessController.fittness);
router.get("/haircare",hairCareController.hairCare);
router.get("/healthandwellness",healthAndWellnessController.healthAndWellness);
router.get("/maincategories",mainCategoriesController.mainCategories);
router.get("/userprofile/:user_id",authenticateToken,userProfileController.userProfile);
router.put("/userprofile/:user_id",authenticateToken,userProfileController.editUserProfile);

router.get("/orderdetails/:order_id",authenticateToken,orderDetailsController.orderDetails);
router.get("/partners",partnerListController.partnerList);
router.get("/productlist",productListController.productList);
router.get("/productlist/topdeals",productListController.topDeals);
router.get("/productlist/newarrivals",productListController.newArrivals);
router.get("/productlist/trendingoffers",productListController.trendingOffers);
router.get("/product/:product_id",productController.productById );
router.get("/questionaries",questionariesController.questionaries);
router.get("/questionaries/:cat_id/:sub_cat_id",questionariesController.questionariesById);
router.get("/relatedproducts/:cat_id",relatedProductsController.relatedProduct);
router.get("/skipaction/:cat_id/:sub_cat_id",skipActionController.skipAction);
router.get("/submitaction/:cat_id/:sub_cat_id/:ques_id/:option_id",submitActionController.submitAction);
router.get("/whatwedo",whatWeDoController.whatWeDo);
router.get("/whishlist/:user_id",authenticateToken,whishlistController.wishlist);
router.get("/search/:keyword",searchController.search);



module.exports = router;