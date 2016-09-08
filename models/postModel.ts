///<reference path ="./../typings/tsd.d.ts"/>
let mongoose = require('mongoose');


let postSchema:any = new mongoose.Schema(
  {
    url: {type:String, unique: true, lowercase: true},
    description: String,
    comments: [],
    pillar: String,
    region: String,
    user: String
  }
)

let post = mongoose.model("post", postSchema);
export = post
