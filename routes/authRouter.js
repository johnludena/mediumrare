let Router = require('express').Router;
let passport = require ('passport')
let User = require('../db/schema.js').User

const authRouter = Router()

authRouter
  .post('/register', function(req, res){
    // passport appends to request
    let newUser = new User(req.body)
    console.log('new user registration request body:', req.body)

    User.findOne({email: req.body.email}, function(err, record){

      if(record !== null) { 
        let msg = {}
        msg.txt = "record already exists"      
        msg.data = record
        res.json(msg)
        return 
      }

      newUser.save(function(err){
        req.login(req.body, function(){
          console.log(req.session)
          res.json({
            user: newUser,
            cookie: req.cookies,
            serverSession: req.session
          })   
        })
      })
    })
  })

authRouter
  .get('/checkAuth', function(req,x,next){console.log(req.body)&&next()}, function (req, res) {
    if (req.user) res.json(req.user);
      else res.json({message: "Forbidden: user no longer authenticated"})
  })
  .post('/login', function(req,res,next){console.log('incoming!!', req.body) && next() }, passport.authenticate('local'),
    function(req, res){
      console.log('PASSPORT DOING SOMETHING PLEASE ANYTHING....')
      if (!req.user) {
        console.log('USER DOESNT EXIST CANT LOGIN')
        res.json({
          err: 'user doesnt exist, bruh'
        })
      } else {
        let userCopy = JSON.parse(JSON.stringify(req.user))
        userCopy.password = ''
        res.json(userCopy)        
      }
    }
  )

  authRouter
    .get('/logout', function (req, res) {
      if (req.user) {
        let email = req.user.email
        req.logout()
        req.json({
          msg: `user ${email} logged out`
        })
      }
      else {
        req.json({
          msg: 'error: no current user'
        })
      }
    })


module.exports = authRouter
