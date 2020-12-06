var Twit = require('twit');
var config = require('./config');
const fs  = require('fs');

var T = new Twit(config);

//var keyword = '';

//var stream = T.stream('statuses/filter', { track: keyword, language: 'en' });
var stream = T.stream('statuses/sample', { language: 'en'});

//var csv = fs.createWriteStream("tweet_sample.csv", {flags:'a'});
var csv = fs.createWriteStream("testing.csv", {flags:'a'});
//csv.write("tweet; location + \n");
csv.write("tweet\n");
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

		var csv = fs.createWriteStream("raw_tweets.csv", {flags:'a'});
		csv.write(message + ";\n");
		csv.end();
	}
});
