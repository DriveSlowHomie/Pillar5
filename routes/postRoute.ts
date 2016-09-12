let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');
let Post = require('../models/postModel')
let User = require('../models/userModel')


let post = new Post();

router.post('/fileUpload', function(req, res, next) {
    post.url = req.body.url;
    post.description = req.body.description;
    post.pillar = req.body.pillar;
    post.region = req.body.region;
//     post.save(function(err, post) {
//        if(err) return next(err);
//        res.send("File Uploaded!");
//     });

    User.findOne({email: "123"}, (err, user) => {
      if(err) {
        res.send(err);
      }
      if(user) {
        let postArray = user.posts;
        postArray.push(post);
        user.posts = postArray;
        user.save((err, user) => {
          if(err) {
            res.send(err)
          }
        })
      }
    })

    post.save(function(err, location) {
         if(err) return next(err);
         res.send("This post has been added");
    });
});

export = router;
