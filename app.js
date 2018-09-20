const express = require("express");
const app = express();
const MobileDetect = require('mobile-detect');

const iOS = process.env.IOS_URL
const android = process.env.ANDROID_URL

app.get("/test", function(req,res) {
  var md = new MobileDetect(req.headers['user-agent']);
  // console.log(md);
  var string = "Is an iPhone: " + md.is('iPhone')
  string += "<br> Is an Android: " + md.is('AndroidOS')
  res.send(string)
})

app.get("/", function(req,res) {
  let md = new MobileDetect(req.headers['user-agent']);
  if (md.is('iPhone')) {
    res.redirect(iOS)
  } else {
    res.redirect(android)
  }
})

let port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("To view your app, open this link in your browser: http://localhost:" + port);
});