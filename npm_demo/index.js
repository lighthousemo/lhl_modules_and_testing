// index.js

var geoip = require("geoip-lite");

var ip = "70.36.63.26";

var geo = geoip.lookup(ip);

console.log("We are in " + geo.city + ", " + geo.region + ".");
