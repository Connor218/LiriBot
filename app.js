var request = require("request");

var movieName = process.argv[2];

var movieName2 = process.argv[3];


var queryUrl = "http://www.omdbapi.com/?t=" + movieName + " " + movieName2 + "&y=&plot=short&apikey=trilogy";


console.log(queryUrl);

request(queryUrl, function(error, response, body) {

console.log("The movie's release date: " + JSON.parse(body).Released);
});