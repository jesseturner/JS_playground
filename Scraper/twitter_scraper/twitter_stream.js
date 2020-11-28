var Twit = require('twit');
var config = require('./config');
const fs  = require('fs');

var T = new Twit(config);

var keyword = 'ufc';

var stream = T.stream('statuses/filter', { track: keyword, language: 'en' });


var csv = fs.createWriteStream("ufc_tweets.csv", {flags:'a'});
csv.write("tweet; location + \n");
csv.end();


stream.on('tweet', function (tweet) {

	var message; 

	if (typeof tweet.extended_tweet !== 'undefined') {
		message = tweet.extended_tweet.full_text;
	}
	else {
		message = tweet.text;
	}

	var isRT = message.substr(0,2);
	
	if (isRT !== "RT") {
		console.log(message + ";" + tweet.user.location); 

		var csv = fs.createWriteStream("ufc_tweets.csv", {flags:'a'});
		csv.write(message + ";" + tweet.user.location + "\n");
		csv.end();
	}
});
