const express = require("express");
const app= express();
const port= 4000;
const bannersRouter = require('./routes/banners');
const mainCategoriesRouter = require('./routes/maincategories');
const productListRouter = require("./routes/productlist");
const partnersListRouter= require("./routes/partnerslist");
const whatWeDoDataRouter = require("./routes/whatwedo");
const hairCareRouter= require("./routes/haircare");
const faceCareRouter= require("./routes/facecare");
const bodyCareRouter= require("./routes/bodycare");
const beardCareRouter= require("./routes/beardcare");
const healthAndWellnessRouter = require("./routes/healthandwellness");
const fitnessRouter = require("./routes/fitness");
const adminDetailsRouter = require("./routes/admindetails");


app.use(express.json());
app.use(
    express.urlencoded({
        extended:true,
    })
);

app.get("/",(req, res) =>{
    res.json({
        message:"absolute-mens"
    });
});

app.use("/banners",bannersRouter);

app.use("/main-categories",mainCategoriesRouter);

app.use("/product-list",productListRouter);

app.use("/partners-list",partnersListRouter);

app.use("/what-we-do",whatWeDoDataRouter);

app.use("/hair-care",hairCareRouter);

app.use("/face-care",faceCareRouter);

app.use("/body-care",bodyCareRouter);

app.use("/beard-care",beardCareRouter);

app.use("/health-and-wellness",healthAndWellnessRouter);

app.use("/fitness",fitnessRouter);

app.use("/admin-details",adminDetailsRouter);




app.use((err, req, res, next) => {
    const statusCode = err.statusCode || 500;
    console.error(err.message, err.stack);
    res.status(statusCode).json({ message: err.message });
    return;
  });

app.listen(port, () =>{
    console.log(`product list listining at the port http://localhost:${port}`);
});