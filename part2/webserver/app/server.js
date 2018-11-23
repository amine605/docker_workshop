const express = require('express');
const bodyParser = require('body-parser');
const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');

const app = express();
const port = 3000;
const databaseHost = process.env.MONGO_HOST || 'mongo';
const databasePort = process.env.MONGO_DB_PORT || 27017;
const databaseUsername = process.env.MONGO_USERNAME || 'root';
const databasePassword = process.env.MONGO_PASSWORD || 'example';
const databaseName = process.env.MONGO_DATABASE || 'mydb';

const url = `mongodb://${databaseUsername}:${databasePassword}@${databaseHost}:${databasePort}/${databaseName}?authSource=admin&w=1`;


app.use(bodyParser.json({
	limit: '50mb',
	extended: true
}));

app.use(bodyParser.urlencoded({
	limit: '50mb',
	extended: true
}));


app.post('/store', function (req, res) {
	let body = req.body;
	MongoClient.connect(url, function (err, client) {
		var db = client.db(databaseName)
		db.collection('my_collection').insertOne(body, function(err, r) {
			assert.equal(null, err);
			assert.equal(1, r.insertedCount);
		});
		res.send('inserted row of data');
		client.close();
	})
});

app.get('/retrieve', function (req, res) {
	MongoClient.connect(url, function (err, client) {
		var db = client.db(databaseName)
		db.collection("my_collection").find({}).toArray(function(err, result) {
			if (err) throw err;
			res.send(result);
			client.close();
		});
	});
});

app.listen(port, (err) => {
if (err) {
	return console.log('something bad happened', err);
}
console.log(`server is listening on ${port}`);
});