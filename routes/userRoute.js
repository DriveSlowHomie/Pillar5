"use strict";
var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var User = require('../models/userModel');
var passport = require('passport');
var user = new User();
var user1 = new User({
    email: 'user',
    name: 'Kanye West',
    tag: 'Yeezy',
    description: 'Just jumped over Jumpman',
    rank: 'God',
    pillar: 'Rap',
    religion: 'USA',
    following: [],
    followers: [],
    posts: [{
            url: "https://cdn.filepicker.io/api/file/0kYW06LdQg6DmELnK74e",
            description: "Screenshot of upload",
            comments: ["Awesome upload", "YaYYYYYY"],
            pillar: "Break Dance",
            region: "Asia",
            user: "Kanye West"
        }]
});
var user2 = new User({
    email: '123',
    name: '123',
    tag: '1234',
    description: '123123123123123',
    rank: '123',
    pillar: '123',
    religion: '123',
    following: [],
    followers: [],
    posts: [{
            url: "http://www.top13.net/wp-content/uploads/2015/10/perfectly-timed-funny-cat-pictures-5.jpg",
            description: "Cats",
            comments: ["Cats are cool", "Silly kitty"],
            pillar: "Break Dance",
            region: "Asia",
            user: "123"
        }]
});
user1.save();
user2.save();
router.post('/register', function (req, res, next) {
    user.name = req.body.name;
    user.tag = req.body.tag;
    user.email = req.body.email;
    user.pillar = req.body.pillar;
    user.region = req.body.region;
    var setPassword = user.setPassword(req.body.password);
    user.passwordHash = setPassword.passwordHash;
    user.salt = setPassword.salt;
    user.save(function (err, user) {
        if (err)
            return next(err);
        res.send("Registration Complete. Please login.");
    });
});
router.post('/login', function (req, res, next) {
    if (!req.body.email || !req.body.password)
        return res.status(400).send("Please fill out every field");
    passport.authenticate('local', function (err, users, info) {
        var token = user.generateJWT();
        console.log(token);
        return res.json({ token: token });
    }(req, res, next));
});
router.get('/userProfile', function (req, res, next) {
    User.find({ email: '123' }).then(function (user) {
        res.json(user);
    });
});
router.get('/profile', function (req, res, next) {
    var user = req.query.user;
    console.log(req.query);
    User.find({ name: user }).then(function (user) {
        res.json(user);
    });
});
router.put('/follow', function (req, res, next) {
    User.find({ email: "123" }).then(req.body.user, { $set: { followers: req.body.email } }, function (err, res) {
        if (err) {
            console.log(err);
        }
        else {
            console.log(res);
        }
    });
});
router.post('/editProfile', function (req, res, next) {
    User.findOne({ email: "123" }, function (err, user) {
        if (err) {
            res.send(err);
        }
        if (user) {
            console.log("++++++++++++++++++++++++++++++++++++", req.body);
            user.image = req.body.image;
            user.description = req.body.description;
            user.tag = req.body.tag;
            user.save(function (err, user) {
                if (err) {
                    res.send("this is the errorrrrr", err);
                }
                else {
                    res.send("This post has been edited");
                }
            });
        }
    });
});
router.get('/userFeed', function (req, res, next) {
    User.find({ email: "123" }).then(function (user) {
        console.log("Im following no one");
        res.send(user.following);
    });
});
module.exports = router;
