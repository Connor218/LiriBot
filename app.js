//omdb Request
var request = require("request");

var nodeArgs = process.argv;

var movieName = "";

for (var i = 2; i < nodeArgs.length; i++) {

  if (i > 2 && i < nodeArgs.length) {

    movieName = movieName + "+" + nodeArgs[i];

  }

  else {

    movieName += nodeArgs[i];

  }
}

var queryUrl = "http://www.omdbapi.com/?t=" + movieName + "&y=&plot=short&apikey=trilogy";

console.log(queryUrl);

request(queryUrl, function(error, response, body) {

  if (!error && response.statusCode === 200) {

    console.log("Release Year: " + JSON.parse(body).Year);
  }
});



//Twitter API 
var Twitter = require('twitter');
 
var client = new Twitter(keys.twitter);
 
var params = {screen_name: 'nodejs'};
client.get('statuses/user_timeline', params, function(error, tweets, response) {
  if (!error) {
    console.log(tweets);
  }
});


//Spotify API 
var Spotify = require('node-spotify-api');

var search = function({ type= 'artist OR album OR track', query= 'My search query', limit= 20 }, callback){

 
var spotify = new Spotify(keys.spotify);
 
spotify.search(type='track', query='All the Small Things', function(err, data) {
  if (err) {
    return console.log('Error occurred: ' + err);
  }
 
console.log(data); 
});

};