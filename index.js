require('dotenv').config()

const express = require('express')
const cors = require('cors')

require('./db/connection')
const router=require('./routes/router')

const server = express()



server.use(cors())
server.use(express.json())
server.use(router)
const PORT = 4000 || process.env.PORT

server.listen(PORT,()=>{
    console.log(`gypsy server starting at port number ${PORT}`);
})

server.get('/',(req,res)=>{
    res.send("gypsy server starting...")
})