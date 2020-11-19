var Twit = require('twit');
var config = require('./config');

var T = new Twit(config);

var keyword = 'ufc';

var stream = T.stream('statuses/filter', { track: keyword });

stream.on('tweet', function (tweet) {
	if (typeof tweet.extended_tweet !== 'undefined') {
		console.log(tweet.extended_tweet.full_text); 
	}
	else {
		console.log(tweet.text);
	}
});
