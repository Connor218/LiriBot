var request = require("request");

var movieName = process.argv[2];

var movieName2 = process.argv[3];


var queryUrl = "http://www.omdbapi.com/?t=" + movieName + " " + movieName2 + "&y=&plot=short&apikey=trilogy";


console.log(queryUrl);

request(queryUrl, function(error, response, body) {

console.log("The movie's release date: " + JSON.parse(body).Released);
});


//Twitter API 
var Twitter = require('twitter');
 
var client = new Twitter({
  consumer_key: '',
  consumer_secret: '',
  access_token_key: '',
  access_token_secret: ''
});
 
var params = {screen_name: 'nodejs'};
client.get('statuses/user_timeline', params, function(error, tweets, response) {
  if (!error) {
    console.log(tweets);
  }
});


//Spotify API 
var Spotify = require('node-spotify-api');
 
var spotify = new Spotify({
  id: <your spotify client id>,
  secret: <your spotify client secret>
});
 
spotify.search({ type: 'track', query: 'All the Small Things' }, function(err, data) {
  if (err) {
    return console.log('Error occurred: ' + err);
  }
 
console.log(data); 
});