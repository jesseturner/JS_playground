var Twit = require('twit');
var config = require('./config');
const fs  = require('fs');
var csv = require('fast-csv');

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
		
		var stream = fs.createWriteStream("ufc_tweets.csv", {flags:'a'});
		//stream.write(tweet.extended_tweet.full_text + ";");
		//stream.end();

		csv.
		write([
			//["Full Text", "Location"],
			[tweet.extended_tweet.full_text, tweet.user.location]]
			, {headers:true})
		.pipe(stream);
	}

	else {
		console.log(tweet.text);

		var stream = fs.createWriteStream("ufc_tweets.csv", {flags:'a'});
		stream.write(tweet.text + ";");
		stream.end();
	}
	console.log("From: ", tweet.user.location);

	var stream = fs.createWriteStream("ufc_tweets.csv", {flags:'a'});
	//stream.write(tweet.user.location + ";");
	//stream.end();

		csv.
		write([
			//["Text", "Location"],
			[tweet.text, tweet.user.location]]
			, {headers:true})
		.pipe(stream);

});
//Currently: splitting at commas within tweet, not organizing by location vs tweet
