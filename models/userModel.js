"use strict";
var mongoose = require('mongoose');
var crypto = require('crypto');
var jwt = require('jsonwebtoken');
var UserSchema = new mongoose.Schema({
    email: { type: String, unique: true, lowercase: true },
    passwordHash: String,
    salt: String,
    name: String,
    tag: String,
    image: String,
    description: String,
    rank: String,
    profilePic: String,
    pillar: String,
    religion: String,
    following: [],
    followers: [],
    posts: []
});
UserSchema.method("setPassword", function (password) {
    var temp = { passwordHash: null, salt: null };
    temp.salt = crypto.randomBytes(16).toString('hex');
    temp.passwordHash = crypto.pbkdf2Sync(password, temp.salt, 1000, 64).toString('hex');
    console.log("this is the hashed password " + temp.passwordHash);
    return temp;
});
UserSchema.method('validatePassword', function (password) {
    var hash = crypto.pbkdf2Sync(password, this.salt, 1000, 64).toString('hex');
    return (hash === this.passwordHash);
});
UserSchema.method('generateJWT', function () {
    var today = new Date();
    var exp = new Date(today);
    exp.setDate(today.getDate() + 36500);
    return jwt.sign({
        id: this._id,
        email: this.email,
        exp: exp.getTime() / 1000
    }, 'SecretKey');
});
var User = mongoose.model("User", UserSchema);
module.exports = User;
