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

var search = function({ type: 'artist OR album OR track', query: 'My search query', limit: 20 }, callback);

 
var spotify = new Spotify({
  id: e22512ca96c84af0be17aafb3572cbf0,
  secret: fe997f4d1cce4e2dbbea26e53010d9a7,
  });
 
spotify.search(type='track', query='All the Small Things', function(err, data) {
  if (err) {
    return console.log('Error occurred: ' + err);
  }
 
console.log(data); 
});