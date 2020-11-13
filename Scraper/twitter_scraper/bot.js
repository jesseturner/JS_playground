console.log("Bot is running")

var Twit = require('twit');

var config = require('./config');

var T = new Twit(config);

var params = {
	screen_name: 'espn',
	count: 3
}
T.get('statuses/user_timeline', params, gotData);


function gotData(err, data, response) {
	var tweets = data;//.statuses;
	for (var i = 0; i < tweets.length; i++) {
		console.log(tweets[i].text);
	}
};


