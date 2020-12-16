const express = require('express');
const app = express();
const Datastore = require('nedb');
app.listen(3000, () => console.log('Listening at 3000'));
app.use(express.static('public'));
app.use(express.json({ limit: '1mb' }));


const database = new Datastore('database.db');
database.loadDatabase();
database.insert( { name: 'test datapoint', value: '10000' } );


app.get('/api', (request, response) => {
	database.find({}, (err, data) => {
		if (err) {
			response.end();
			return;
		}
		response.json(data);
	});
});

app.post('/api', (request, response) => {
	const data = request.body;
	const timestamp = Date.now();
	data.timestamp = timestamp;
	database.insert(data);
	response.json(data);
});

