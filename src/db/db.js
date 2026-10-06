const mongoose = require('mongoose')


async function connectDb(){
 await mongoose.connect("mongodb+srv://sahil12344kumar_db_user:KWMGJ9N5qipyJkzE@yt.tkijitv.mongodb.net/project-1")

 console.log("Connected  to DB ")
}