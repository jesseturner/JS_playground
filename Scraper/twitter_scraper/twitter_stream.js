var Twit = require('twit');
var config = require('./config');
const fs  = require('fs');
var csvWriter = require('csv-write-stream')

var T = new Twit(config);

var keyword = 'ufc';

var stream = T.stream('statuses/filter', { track: keyword });

/*
stream.on('tweet', function (tweet) {
		console.log(tweet);
});
*/



stream.on('tweet', function (tweet) {
	
	if (typeof tweet.extended_tweet !== 'undefined') {
		console.log(tweet.extended_tweet.full_text); 
		
		var writer = csvWriter({ headers: ["tweet", "location"]});
		//var stream = fs.createWriteStream("ufc_tweets.csv", {flags:'a'});
		writer.pipe(fs.createWriteStream('out.csv', {flags: 'a'}));
		writer.write({tweet: tweet.extended_tweet.full_text});
		writer.end();
	}

	else {
		console.log(tweet.text);
		
		var writer = csvWriter({ headers: ["tweet", "location"]});
		//var stream = fs.createWriteStream("ufc_tweets.csv", {flags:'a'});
		writer.pipe(fs.createWriteStream('out.csv', {flags: 'a'}));
		writer.write({tweet: tweet.text});
		writer.end();
	}
	console.log("From: ", tweet.user.location);

	var writer = csvWriter({ headers: ["tweet", "location"]});
	//var stream = fs.createWriteStream("ufc_tweets.csv", {flags:'a'});
	writer.pipe(fs.createWriteStream('out.csv', {flags: 'a'}));
	writer.write({location: tweet.user.location});
	writer.end();

});
