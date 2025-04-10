const express=require('express');
const uiRouter=express.Router();


uiRouter.get("/",(req,res)=>{
    res.render('signup');
})

uiRouter.get("/login",(req,res)=>{
    res.render('login');
})


module.exports=uiRouter;