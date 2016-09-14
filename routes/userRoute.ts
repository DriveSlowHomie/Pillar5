let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');
let User = require('../models/userModel')
let passport = require('passport');

let user:any = new User();

let user1 = new User(
  {
    email: 'user',
    name:'Kanye West',
    tag:'Yeezy',
    description:'Just jumped over Jumpman',
    rank:'God',
    pillar:'Rap',
    religion:'USA',
    following:[],
    followers:[],
    posts:[]
  }
)

user1.save()

//Register user into database
router.post('/register', function(req, res, next) {
    user.name = req.body.name;
    user.tag = req.body.tag;
    user.email = req.body.email;
    user.pillar = req.body.pillar;
    user.region = req.body.region;
    let setPassword = user.setPassword(req.body.password);
    user.passwordHash = setPassword.passwordHash;
    user.salt = setPassword.salt;
    user.save(function(err, user) {
        if(err) return next(err);
        res.send("Registration Complete. Please login.");
    });
});

//Login to Pillar5
router.post('/login', (req, res, next ) => {
  if(!req.body.email || !req.body.password) return res.status(400).send("Please fill out every field");
  passport.authenticate('local', function(err, users, info){
        let token = user.generateJWT();
        console.log(token)
        return res.json({token : token});
    }(req, res, next));
})

//Get User info
router.get('/userProfile', function(req, res, next) {
  User.find({email: '123'}).then((user)=>{
    res.json(user);
  })
});

router.post('/editProfile', function(req, res, next) {
  User.findOne({email: "123"}, (err, user) => {
    if(err) {
      res.send(err);
    }
    if(user) {
      console.log("++++++++++++++++++++++++++++++++++++", req.body)
      user.image = req.body.image;
      user.description = req.body.description;
      user.tag = req.body.tag;
      user.save((err, user) => {
        if(err) {
          res.send("this is the errorrrrr", err)
        } else {
          res.send("This post has been edited");
        }
      })
    }
  })
});

router.get('/userFeed', function(req, res, next) {
  User.find({email: "123"}).then((user)=>{
    console.log(`Im following no one`)
    res.send(user.following);
  })
});


//Login to pillar5
// router.post('/login', (req, res, next ) => {
//   if(!req.body.email || !req.body.password)
//   res.status(400).send("Please fill out every field");
// })

export = router;
