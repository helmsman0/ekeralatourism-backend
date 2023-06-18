//express
const express = require('express')

//router 
const router = new express.Router()

//import controller
const  userController = require('../controller/userController')
const uplode = require('../multerConfig/storageConfig')


//define router for each http res
router.post('/user/register',uplode.single(''),userController.register)


//export router
module.exports=router 