let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');
let User = require('../models/userModel')
let passport = require('passport');

let user = new User();

//Register user into database
router.post('/register', function(req, res, next) {
    user.email = req.body.email;
    //let setPassword = user.setPassword(req.body.password);
    user.passwordHash = req.body.password;
    // user.passwordHash = setPassword.passwordHash;
    // user.salt = setPassword.salt;
    user.save(function(err, user) {
        if(err) return next(err);
        res.send("Registration Complete. Please login.");
    });
});

//Get User info
router.get('/userProfile', function(req, res, next) {
  User.find({email: '123'}).then((user)=>{
    res.json(user);
  })
});


export = router;
