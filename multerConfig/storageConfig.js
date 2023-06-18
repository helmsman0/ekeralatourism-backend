//omport multer
const multer = require('multer')

//using multer define storage
const storage = multer.diskStorage({
    destination:(req,res,callback)=>{
        callback(null,'')
    }
})

//define uplode
const uplode = multer({
    storage
})

module.exports = uplode