const Emp = require('../models/emp');

const {setUser}=require("../services/service")
async function empRegister(req, res) {
    const { name, email, password } = req.body;
    if(!name || !email || !password) 
        return res.status(400).json({ message: "All fields are required" });                                    
    await Emp.create({name,email,password});
    // return res,redirect("/login")
    res.redirect("/login");

}

async function login(req, res) {
    const { email, password } = req.body;

    const user = await Emp.findOne({ email, password });

    if (!user) {
        return res.json({ message: "Invalid credentials" });
    }

    return res.json({ message: "Login successful", user });
}
const token=setUser(user);
res.cookie("session_id",token);
return res.redirect('/home');
module.exports = { empRegister,login};
