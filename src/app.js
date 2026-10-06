const express = require("express")

const multer = require('multer')
const app = express()

const upload = multer({storage:multer.memoryStorage() })


app.post('/create-post', upload.single("image"), async(req,res)=>{
     console.log(req.body);
})


module.exports = app