const express = require("express");
const app= express();
const port= 4000;
const bannersRouter = require('./routes/banners');
const mainCategoriesRouter = require('./routes/maincategories');
const productListRouter = require("./routes/productlist");
const partnersListRouter= require("./routes/partnerslist");
const whatwedodataRouter = require("./routes/whatwedo")

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

app.use("/what-we-do",whatwedodataRouter);




app.use((err, req, res, next) => {
    const statusCode = err.statusCode || 500;
    console.error(err.message, err.stack);
    res.status(statusCode).json({ message: err.message });
    return;
  });

app.listen(port, () =>{
    console.log(`product list listining at the port http://localhost:${port}`);
});