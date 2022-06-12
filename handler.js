"use strict";

const { mongoClient } = require('./mongo');

module.exports.push_mongo = async (event) => {
	const db = await mongoClient();
	if (!db) res.status(500).send("Mongo DB Unavailable");
	const  data  = event;
	console.log(event); 
	console.log(typeof(data));
	await db.collection("user").insertOne(data);
	return {
		statusCode: 200,
		body: JSON.stringify(data),
	};
};
