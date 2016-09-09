let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');
let User = require('../models/userModel')
let passport = require('passport');

let user:any = new User();

//Register user into database
router.post('/register', function(req, res, next) {
    user.name = req.body.name;
    user.tag = req.body.tag;
    user.email = req.body.email;
    user.pillar = req.body.pillar;
    user.region = req.body.region;
    let setPassword = user.setPassword(req.body.password);
    user.passwordHash = req.body.password;
    user.passwordHash = setPassword.passwordHash;
    user.salt = setPassword.salt;
    user.save(function(err, user) {
        if(err) return next(err);
        res.send("Registration Complete. Please login.");
    });
});

//Login to pillar5
router.post('/login', (req, res, next ) => {
  if(!req.body.email || !req.body.password)
  res.status(400).send("Please fill out every field");
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



export = router;
