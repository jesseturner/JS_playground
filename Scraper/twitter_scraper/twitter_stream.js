var Twit = require('twit');
var config = require('./config');
const fs  = require('fs');

var T = new Twit(config);

var keyword = 'ufc';

var stream = T.stream('statuses/filter', { track: keyword });


var csv = fs.createWriteStream("ufc_tweets.csv", {flags:'a'});
csv.write("tweet; location + \n");
csv.end();

stream.on('tweet', function (tweet) {
	
	if (typeof tweet.extended_tweet !== 'undefined') {
		console.log(tweet.extended_tweet.full_text + ";" + tweet.user.location); 

		var csv = fs.createWriteStream("ufc_tweets.csv", {flags:'a'});
		csv.write(tweet.extended_tweet.full_text + ";" + tweet.user.location + "\n");
		csv.end();
	}

	else {
		console.log(tweet.text + ";" + tweet.user.location);
		
		var csv = fs.createWriteStream("ufc_tweets.csv", {flags:'a'});
		csv.write(tweet.text + ";" + tweet.user.location + "\n");
		csv.end();
	}
});
