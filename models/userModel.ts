///<reference path ="./../typings/tsd.d.ts"/>
let mongoose = require('mongoose');
let crypto = require('crypto');
let jwt = require('jsonwebtoken');

//UserSchema
let UserSchema:any = new mongoose.Schema(
  {
    email: {type:String, unique: true, lowercase: true},
    passwordHash:String,
    salt:String,
    name:String,
    tag:String,
    image:String,
    description:String,
    rank:String,
    profilePic:String,
    pillar:String,
    religion:String,
    following:[],
    followers:[],
    posts:[]
  }
)

//Salting & Hashing
UserSchema.method("setPassword", (password) => {
  let temp = {passwordHash:null, salt:null};
  temp.salt = crypto.randomBytes(16).toString('hex')
  temp.passwordHash = crypto.pbkdf2Sync(password, temp.salt, 1000, 64).toString('hex');
  console.log(`This is the hashed password ${temp.passwordHash}`)
  return temp;
});

//validatePassword
UserSchema.method('validatePassword', function(password) {
    let hash = crypto.pbkdf2Sync(password, this.salt, 1000, 64).toString('hex');
     return (hash === this.passwordHash);
});

//GenerateJWT
UserSchema.method('generateJWT', function() {
   let today = new Date();
   let exp = new Date(today);
   exp.setDate(today.getDate() + 36500);
   return jwt.sign({
     id: this._id,
     email: this.email,
     exp: exp.getTime() / 1000
   }, 'SecretKey');
})

let User = mongoose.model("User", UserSchema);
export = User
