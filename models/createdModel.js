const mongoose = require('mongoose')
 mongoose.connect( 'mongodb://localhost:27017/cookie')

 const createSchema = mongoose.Schema({
    username : String,
    password : String,
    email : String,
    age : String
 })

 module.exports = mongoose.model("creater", createSchema)