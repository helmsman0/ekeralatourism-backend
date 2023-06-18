const mongoose = require ('mongoose')

// const validator = require('validator') 

//schema 
const userSchema = new mongoose.Schema({
    email:{
        type:String,
        required:true,
        unique:true
    },
    username:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }
})

//const model to store userdetails
const users = new mongoose.model('users',userSchema)

//export model
module.exports = users

// validator(value){
//     if(!validator.isEmail(value)){
//         throw Error("Invalide Email")
//     }
// }