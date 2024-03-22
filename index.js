const express = require("express");
const app= express();
const port= 4000;
const productListRouter = require("./routes/productlist")

app.use(express.json());
app.use(
    express.urlencoded({
        extended:true,
    })
);

// app.get("/",(req, res) =>{
//     res.json({
//         message:"Product-list"
//     });
// });

app.use("/",productListRouter);

app.use((err, req, res, next) => {
    const statusCode = err.statusCode || 500;
    console.error(err.message, err.stack);
    res.status(statusCode).json({ message: err.message });
    return;
  });

app.listen(port, () =>{
    console.log(`product list listining at the port http://localhost:${port}`);
});