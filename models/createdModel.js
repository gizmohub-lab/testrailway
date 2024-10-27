const mongoose = require('mongoose')
 mongoose.connect( 'mongodb+srv://gizmohub-lab:Gizmoashi063@emailer.cay0o.mongodb.net/?retryWrites=true&w=majority&appName=emailer')

 const createSchema = mongoose.Schema({
    username : String,
    password : String,
    email : String,
    age : String
 })

 module.exports = mongoose.model("creater", createSchema)
