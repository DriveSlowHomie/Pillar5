/// <reference path="./../typings/tsd.d.ts"/>
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
//For FacebookStrategy
var FacebookStrategy = require('passport-facebook').Strategy;
var mongoose = require('mongoose');
var User = mongoose.model('User');

passport.serializeUser(function(user,done){
  done(null, user)
})

passport.deserializeUser(function(obj, done){
  done(null, obj);
})

// passport.use(new LocalStrategy(
//   {usernameField: 'email',
//   passwordField: 'password'},
//   function(email, password, done){
//   console.log('Milkshake!!!!!!!!!!!! email, password', email, password)
//   User.findOne({email: email}, function(err, user) {
//     if(err) return done(err);
//     if(!user) return done(null, false, {message: "Incorrect username"})
//     if(!user.validatePassword(password)) return done(null, false, {message: "Password does not match"});
//     return done(null, user);
//   });
// }))



// passport.use(new LocalStrategy(
//   function(username, password, done) {
//     User.findOne({ email: username }, function (err, user) {
//       if (err) { return done(err); }
//       if (!user) {
//         return done(null, false, { message: 'Incorrect username.' });
//       }
//       if (!user.validPassword(password)) {
//         return done(null, false, { message: 'Incorrect password.' });
//       }
//       return done(null, user);
//     });
//   }
// ));


passport.use(new LocalStrategy(function(username, password, done) {
    console.log('Milkshake!!!!!!!!!!!! email, password', username, password)

    User.findOne({email: username}, function(err, user) {
      if(err) return done(err);
      if(!user) return done(null, false, {message: 'Incorrect username.'});
      if(!user.validatePassword(password)) return done(null, false, {message: 'Password does not match.'});
      return done(null, user);
    });
}));

//For Facebook strategy
passport.use(new FacebookStrategy({
 clientID: "661045760739309",
 clientSecret: "6b076de93a35233ce75b9838fb5a5eb8",
 callbackURL: "http://localhost:3000/api/users/facebook/callback",
 passReqToCallback: true,
 profileFields: ['id', 'name', "emails"]
 },
 function(req, accessToken, refreshToken, profile, done){
   console.log("THIS IS FROM FACEBOOK STATEGY");
   console.log(profile.emails);
   User.findOne({ facebookId: profile.id }, function (err, user) {
     if(err) return done(err, null);
     if(user) {
       return done(null, user)
     } else {
       var user = new User();
       if(profile.emails) {
         user.email = profile.emails[0].value
       } else {
         user.email = profile.username + "@facebook.com";
       }
       user.tag = profile.name.givenName.toLowerCase() + profile.name.familyName.toLowerCase();
       user.save(function(err, user) {
         if(err) return err;
         console.log("Saved");
       })
       return done(err, user);
     }
   });
 }));
