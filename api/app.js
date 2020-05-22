const express = require('express')
const path = require('path');
const mongoose = require('mongoose');

const port = process.env.PORT || 3000;

const app = express();

//Connect To DB
mongoose.connect('mongodb+srv://ranaco022:'+ 
	process.env.MONGO_ATLAS_PW +
	'@dashboard-rest-api-itz8p.mongodb.net/asset-records?retryWrites=true&w=majority',
	{ useUnifiedTopology: true, useNewUrlParser: true }, 
	() => console.log('connected to DB!')
);

app.get('/', (req, res) => {
  res.send('Asset Tracker!');
});

app.listen(port, function () {
    console.log(`App is listening on port ${port}.`);
 });