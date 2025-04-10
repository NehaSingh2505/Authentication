const express=require("express");
const app=express();
const{connectDB}=require("./connectionDB");
const router=express.Router();
const userRoute=require("./routes/emp");
const path=require("path");
const uiRouter=require("./routes/uiEmp");
const Emp=require("./models/emp");
//EJS setup


app.set("view engine","ejs");
app.set("views",path.resolve("./views"));

connectDB("mongodb://127.0.0.1:27017/auth").then(()=>{
    console.log("db connected");
});



// router and url via middleware
app.use(express.json());
app.use(router);
app.use(express.urlencoded({extended:false}));
app.use("/",uiRouter);
app.use("/", userRoute);



//app Listen
app.listen(6001,()=>{
    console.log("server started");
})