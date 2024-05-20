const express = require("express");
const app= express();
const port= 4000;

const authRouter = require('./routes/auth');
const appRouter = require("./routes/app.router");



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


app.use("/auth",authRouter);

app.use("/app",appRouter);




app.use((err, req, res, next) => {
    const statusCode = err.statusCode || 500;
    console.error(err.message, err.stack);
    res.status(statusCode).json({ message: err.message });
    return;
  });

app.listen(port, () =>{
    console.log(`product list listining at the port http://localhost:${port}`);
});