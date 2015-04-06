require('cloud/app.js');


// Use Parse.Cloud.define to define as many cloud functions as you want.
// For example:
Parse.Cloud.define("hello", function(request, response) {
  response.success("Hello world!");
});

Parse.Cloud.define("clickmania_duke", function(request, response) {
  response.success("You've registered a click for Duke!");
});

Parse.Cloud.define("clickmania_wisconsin", function(request, response) {
  response.success("You've registered a click for Wisconsin!");
});
