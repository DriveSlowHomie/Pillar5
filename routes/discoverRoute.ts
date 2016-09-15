let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');
let Post = require('../models/postModel');

router.get('/byPillar', function(req, res, next) {
    var pillarFind = req.query.pillar;
    Post.find({pillar: pillarFind}, (err, post) => {
      if(err) {
        res.send(err);
      }
      if(post) {
        res.send(post);
      }
    })
});

export = router;
