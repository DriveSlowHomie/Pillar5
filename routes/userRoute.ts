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
    posts:[{
        url: "https://cdn.filepicker.io/api/file/0kYW06LdQg6DmELnK74e",
        description: "Screenshot of upload",
        comments: ["Awesome upload", "YaYYYYYY"],
        pillar: "Break Dance",
        region: "Asia",
        user: "Kanye West"
      }]
  }
)

let user2 = new User(
  {
    email: '123',
    name:'123',
    tag:'1234',
    description:'123123123123123',
    rank:'123',
    pillar:'123',
    religion:'123',
    following:[],
    followers:[],
    posts:[{
        url: "http://www.top13.net/wp-content/uploads/2015/10/perfectly-timed-funny-cat-pictures-5.jpg",
        description: "Cats",
        comments: ["Cats are cool", "Silly kitty"],
        pillar: "Break Dance",
        region: "Asia",
        user: "123"
      }]
  }
)
user1.save()
user2.save()

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
// router.post('/login', (req, res, next ) => {
//   console.log("this is req.body from login*********************", req.body)
//   if(!req.body.username || !req.body.password) return res.status(400).send("Please fill out every field");
//   passport.authenticate('local', function(err, users, info){
//     if (user) {
//       console.log(user)
//       let token = user.generateJWT();
//       // console.log("ERROR++++++++++++++++++++++++++++++++++++++++", err)
//       // console.log("USERS++++++++++++++++++++++++++++++++++++++++", user)
//       // console.log("INFO++++++++++++++++++++++++++++++++++++++++", info)
//
//       return res.json({token : token});
//     }
//     }(req, res, next));
// })

// router.post('/login', function(req, res, next) {
//   console.log("this is req.body from login*********************", req.body)
//   passport.authenticate('local', function(err, users, info) {
//             let token = user.generateJWT();
//             console.log(user, token)
//             return res.json({token : token});
//   })(req, res, next);
// });

router.post('/login', function(req, res, next) {
	if(!req.body.username || !req.body.password) return res.status(400).send("Please fill out every field");
	passport.authenticate('local', function(err, user, info) {
		console.log("THIS IS CONSOLELOGGING", user, err);
		if(err) return next(err);
		if(user) return res.json({token : user.generateJWT()});
		res.status(400).send(info);
	})(req, res, next);
});

//Get User info
router.get('/userProfile', function(req, res, next) {
  User.find({email: '123'}).then((user)=>{
    res.json(user);
  })
});

//Get Profile info
router.get('/profile', function(req, res, next) {
  let user = req.query.user
  console.log(req.query)
  User.find({name: user}).then((user)=>{
    res.json(user);
  })
});

//Follow
router.post('/follow', function(req, res, next) {
  console.log(req.body.follower, req.body.following, req.body)
  User.find({email: req.body.follower}, (err, user) => {
    if(err) {
      res.send(err);
    }
    if(user) {
      let following = user.following
      following.push(req.body.following)
      user.following = following
      user.save((err, user) => {
        if(err) {
          res.send("this is the error", err)
        } else {
          res.send("Following!");
        }
      })
    }
  })
  // User.find({email: req.body.following}, (err, user) => {
  //   if(err) {
  //     res.send(err);
  //   }
  //   if(user) {
  //     user.followers = req.body.follower
  //     user.save((err, user) => {
  //       if(err) {
  //         res.send("this is the error", err)
  //       } else {
  //         res.send("Following!");
  //       }
  //     })
  //   }
  // })
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
