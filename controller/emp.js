const Emp = require('../models/emp');

async function empRegister(req, res) {
    console.log("register called");
    const { name, email, password } = req.body;
    if(!name || !email || !password) return res.json({ message: "Please fill all the fields" });
    await Emp.create({name,email,password});
    return res.json({ message: "User registered successfully" });
    // return res,redirect("/login")
    res.redirect("/login");

}
async function login(req,res){
    console.log("Login called");
    const {email,password}=req.body;
    const user=await Emp.findOne({email,password});
    if(!user){
        res.json({message:"Invalid credentials"});
        return;
    }
}
module.exports = { empRegister};