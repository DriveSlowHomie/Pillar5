let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');
let Post = require('../models/postModel');

router.get('/byPillar', function(req, res, next) {
    var pillarFind = req.query.pillar;
console.log("PILLARRRR****************************************", pillarFind)

    Post.find({pillar: pillarFind}, (err, post) => {
      if(err) {
        res.send(err);
      }
      if(post) {
        let postArray = [];
        // postArray.push(post);
        console.log("DISCOVER++++++++++++++++++++++++++++++", post)
        res.send(post);
      }
    })
});

export = router;
