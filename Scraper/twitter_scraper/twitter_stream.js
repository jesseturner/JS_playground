var Twit = require('twit');

var config = require('./config');

var T = new Twit(config);


var stream = T.stream('statuses/filter', { track: '#ufc' });

stream.on('tweet', function (tweet) {
	console.log(tweet.text);
});
