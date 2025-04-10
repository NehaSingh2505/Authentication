const {getUser}=require("../services/service");


 async function restrictToLogginUserOnly(req,res,next){
    consoloe.log(req.cookies);
    const userUid=req.cookies?.session_id;
    consoloe.log(userUid);
    if(!userUid){
        return res.redirect("/login")
    }
    const user=getUser(userUid);    
    if(!user){
        return res.redirect("/login")
    }
    req.user=user;
    next();
 }
 async function checkAuth(req,res,next){
    const userUid=req.cookies?.session_id;
    if(!userUid){
        return res.redirect("/login")
    }
    const user=getUser(userUid);    
    if(!user){
        return res.redirect("/login")
    }
    req.user=user;
    next();
 }

 module.exports={restrictToLogginUserOnly,checkAuth}