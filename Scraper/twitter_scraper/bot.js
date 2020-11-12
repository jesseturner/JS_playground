console.log("Bot is running")

var Twit = require('twit');

var config = require('./config');

var T = new Twit(config);

var params = {
	q: 'banana', //since:2011-07-11',
	count: 3
}

T.get('search/tweets', params, gotData);

function gotData(err, data, response) {
	var tweets = data.statuses;
	for (var i = 0; i < tweets.length; i++) {
		console.log(tweets[i].text);
	}
};

/*(T.get('search/tweets', { q: 'banana since:2011-07-11', count: 100 }, function(err, data, response) {
  console.log(data)
})*/

