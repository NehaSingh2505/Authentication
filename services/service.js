const jwt=require('jsonwebtoken');
const secretKey="Querty$123#321";

function setUser(user){
    return jwt.sign({
        id:user._id,
        name:user.name,
        email:user.email
    },secretKey);
}

function getUser(token){
    try{
        return jwt.verify(token,secretKey);
    }catch(error){
        return null;
    }
}
module.exports={setUser,getUser};