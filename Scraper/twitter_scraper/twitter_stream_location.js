var Twit = require('twit');
var config = require('./config');

var T = new Twit(config);

var sanFrancisco = [ '-122.75', '36.8', '-121.75', '37.8' ]

var stream = T.stream('statuses/filter', { locations: sanFrancisco });

stream.on('tweet', function (tweet) {
	if (typeof tweet.extended_tweet !== 'undefined') {
		console.log(tweet.extended_tweet.full_text); 
	}
	else {
		console.log(tweet.text);
	}
});
