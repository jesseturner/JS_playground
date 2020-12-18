const express = require('express');
const app = express();
const Datastore = require('nedb');
app.listen(3000, () => console.log('Listening at 3000'));
app.use(express.static('public'));
app.use(express.json({ limit: '1mb' }));


const database = new Datastore('database.db');
database.loadDatabase();


//Save incoming data
app.post('/api', (request, response) => {
	const data = request.body;
	const timestamp = Date.now();
	data.timestamp = timestamp;
	database.insert(data);
	response.json(data);
	console.log('Saved data to db.');
});

//Run classifier

//Send data to client side
app.get('/api', (request, response) => {
	database.find({}, (err, data) => {
		if (err) {
			response.end();
			return;
		}
		response.json(data);
	});
	console.log('Sent data to client side.');
});

