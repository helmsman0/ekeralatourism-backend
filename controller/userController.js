const users = require('../model/userSchema')
//define logic to resolve client request


exports.register = async (req,res) =>{
// console.log(req);
//get other user input from req body
const {email,username,password} = req.body
if(!email || !username || !password){
    res.status(403).json("All inputs are required")
 }
 try{
    // check existing user
    const preuser = await users.findOne({email})
    if(preuser){
        res.status(406).json("user already exist")
    }
    else{
        //register user to db
        const newuser = new users({
            email,username,password
        })
        //db save
        await newuser.save()
        res.status(200).json(newuser)
    }
 }
 catch(error){
    res.status(401).json(error)
 }
}


// Register a new user
