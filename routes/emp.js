const express=require ('express');
const router=express.Router();
const {signUp,login}=require("../controller/emp");
const emp=require ('../controller/emp');

router.post('/addemp',emp.empRegister);
router.post('/login',emp.login);

module.exports=router;


