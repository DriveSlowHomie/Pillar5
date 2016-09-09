"use strict";
var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Post = require('../models/postModel');
var User = require('../models/userModel');
var post = new Post();
router.post('/fileUpload', function (req, res, next) {
    post.url = req.body.url;
    post.description = req.body.description;
    post.pillar = req.body.pillar;
    post.region = req.body.region;
    User.findOne({ email: "123" }, function (err, user) {
        if (err) {
            res.send(err);
        }
        if (user) {
            var postArray = user.posts;
            postArray.push(post.url);
            user.posts = postArray;
            user.save(function (err, user) {
                if (err) {
                    res.send(err);
                }
            });
        }
    });
    post.save(function (err, location) {
        if (err)
            return next(err);
        res.send("This post has been added");
    });
});
module.exports = router;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicG9zdFJvdXRlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsicG9zdFJvdXRlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxJQUFJLE9BQU8sR0FBRyxPQUFPLENBQUMsU0FBUyxDQUFDLENBQUM7QUFDakMsSUFBSSxNQUFNLEdBQUcsT0FBTyxDQUFDLE1BQU0sRUFBRSxDQUFDO0FBQzlCLElBQUksUUFBUSxHQUFHLE9BQU8sQ0FBQyxVQUFVLENBQUMsQ0FBQztBQUNuQyxJQUFJLElBQUksR0FBRyxPQUFPLENBQUMscUJBQXFCLENBQUMsQ0FBQTtBQUN6QyxJQUFJLElBQUksR0FBRyxPQUFPLENBQUMscUJBQXFCLENBQUMsQ0FBQTtBQUd6QyxJQUFJLElBQUksR0FBRyxJQUFJLElBQUksRUFBRSxDQUFDO0FBRXRCLE1BQU0sQ0FBQyxJQUFJLENBQUMsYUFBYSxFQUFFLFVBQVMsR0FBRyxFQUFFLEdBQUcsRUFBRSxJQUFJO0lBQzlDLElBQUksQ0FBQyxHQUFHLEdBQUcsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUM7SUFDeEIsSUFBSSxDQUFDLFdBQVcsR0FBRyxHQUFHLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQztJQUN4QyxJQUFJLENBQUMsTUFBTSxHQUFHLEdBQUcsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDO0lBQzlCLElBQUksQ0FBQyxNQUFNLEdBQUcsR0FBRyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUM7SUFNOUIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxFQUFDLEtBQUssRUFBRSxLQUFLLEVBQUMsRUFBRSxVQUFDLEdBQUcsRUFBRSxJQUFJO1FBQ3JDLEVBQUUsQ0FBQSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7WUFDUCxHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ2hCLENBQUM7UUFDRCxFQUFFLENBQUEsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO1lBQ1IsSUFBSSxTQUFTLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQztZQUMzQixTQUFTLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUN6QixJQUFJLENBQUMsS0FBSyxHQUFHLFNBQVMsQ0FBQztZQUN2QixJQUFJLENBQUMsSUFBSSxDQUFDLFVBQUMsR0FBRyxFQUFFLElBQUk7Z0JBQ2xCLEVBQUUsQ0FBQSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7b0JBQ1AsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQTtnQkFDZixDQUFDO1lBQ0gsQ0FBQyxDQUFDLENBQUE7UUFDSixDQUFDO0lBQ0gsQ0FBQyxDQUFDLENBQUE7SUFFRixJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVMsR0FBRyxFQUFFLFFBQVE7UUFDM0IsRUFBRSxDQUFBLENBQUMsR0FBRyxDQUFDO1lBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUN6QixHQUFHLENBQUMsSUFBSSxDQUFDLDBCQUEwQixDQUFDLENBQUM7SUFDMUMsQ0FBQyxDQUFDLENBQUM7QUFDUCxDQUFDLENBQUMsQ0FBQztBQUVILGlCQUFTLE1BQU0sQ0FBQyJ9