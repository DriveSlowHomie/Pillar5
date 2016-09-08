///<reference path ="./../typings/tsd.d.ts"/>
let mongoose = require('mongoose');
let crypto = require('crypto');

//UserSchema
let UserSchema:any = new mongoose.Schema(
  {
    email: {type:String, unique: true, lowercase: true},
    passwordHash:String,
    salt:String,
    name:String,
    tag:String,
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

//Salting
UserSchema.method("setPassword", (password) => {
  let temp = {passwordHash:null, salt:null};
  temp.salt = crypto.randomBytes(16).toString('hex')
  temp.passwordHash = crypto.pbkdf2Sync(password, temp.salt, 1000, 64).toString('hex');
  console.log(`this is the hashed password ${temp.passwordHash}`)
  return temp;
});

//Hashing
UserSchema.method('validatePassword', function(password) {
    let hash = crypto.pbkdf2Sync(password, this.salt, 1000, 64).toString('hex');
     return (hash === this.passwordHash);
});

let User = mongoose.model("User", UserSchema);
export = User
