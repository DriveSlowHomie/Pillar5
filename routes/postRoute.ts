let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');
let Post = require('../models/postModel')

let post = new Post();

router.post('/fileUpload', function(req, res, next) {
    post.url = req.body.url;
    post.description = req.body.description;
    post.pillar = req.body.pillar;
    post.region = req.body.region;
    post.save(function(err, post) {
       if(err) return next(err);
       res.send("File Uploaded!");
    });
});

export = router;
