var Twit = require('twit');

var config = require('./config');

var T = new Twit(config);


var stream = T.stream('statuses/filter', { track: 'ufc' });

stream.on('tweet', function (tweet) {
	if (typeof tweet.extended_tweet !== 'undefined') {
		console.log(tweet.extended_tweet.full_text); //if not undefined
	}
	else {
		console.log(tweet.text);
	}
});
