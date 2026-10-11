const express = require("express")
const uploadFile = require('./services/storage.service')
const postModel = require("./model/post.model")

const multer = require('multer')
const app = express();
app.use(express.json());

const upload = multer({storage:multer.memoryStorage() })


app.post('/create-post', upload.single("image"), async(req,res)=>{
     console.log(req.body); 
     console.log(req.file);

     const result = await uploadFile(req.file.buffer)

     const post = await postModel.create({
          caption: req.body.caption,
          image: result.url
     })

     return res.status(201).json({
          message:"Post created succefully ",
          post
     })

})


app.get('/post', async(req,res)=>{
    try {
      const PostData = await postModel.find()

     return res.status(200).json({
          message: "post fetch succesfully ",
          PostData 
     })
    } catch (error) {
     console.log(error.message)
     return res.status(500).json({message:"Internal server error", error})
    }
})



module.exports = app