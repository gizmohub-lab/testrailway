const cookieParser = require('cookie-parser')
const express = require ('express')
const app = express()
const createdModel = require('./models/createdModel')
const jwt = require('jsonwebtoken')
const { name } = require('ejs')
const bcrypt = require('bcrypt')
const { token } = require('morgan')

app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.set("view engine", "ejs")
app.use(cookieParser())


app.get('/', function(req,res){
   res.render('create')
})
app.post('/create' ,  function(req,res){
    let {username,age,password,email } = req.body
    bcrypt.genSalt(10, function(err, salt) {
        bcrypt.hash(password, salt, async function(err, hash) {
            const createdUser = await createdModel.create({
                username,
                age,
                password:hash,
                email
                
            })
            var token = jwt.sign({ email}, 'shhhhh');
            res.cookie("token", token)
            res.redirect('/login')
        });
    
    });
    
    
})

app.get('/login',  function(req,res){
   res.render('login')
   
   
})
app.post('/login', async function(req,res){
    let {password,email} = req.body
    const loggedUser = await createdModel.findOne({ email });
    console.log(loggedUser)
    bcrypt.compare(password, loggedUser.password, function(err, result) {
      console.log(result)
      if (result) return res.send('the page is ready now ')
        else return res.send('pooda pulle')
    });
   
  
})

app.listen(3000,function(){
    console.log('connected directly')
})