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
 
var client = new Twitter({
  consumer_key: 'yQ9b9jAqTBY3CAiwE0NrIQaBB',
  consumer_secret: 'VaBrajlMTdeu0DD0eGwkBbV5GVNvWd1KseGhMXKRP1OMXBJmDl',
  access_token_key: '555614925-VUtSJHi4x4BruQR25FEeqwxWdNjFLQH2HxRdOgQG',
  access_token_secret: 'Qke2w7sZ1DJACeXOb2GF4IqczhG6ztt0EsZXyJOybDqLO'
});
 
var params = {screen_name: 'nodejs'};
client.get('statuses/user_timeline', params, function(error, tweets, response) {
  if (!error) {
    console.log(tweets);
  }
});


//Spotify API 
var Spotify = require('node-spotify-api');

var search = function({ type= 'artist OR album OR track', query= 'My search query', limit= 20 }, callback){

 
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

};