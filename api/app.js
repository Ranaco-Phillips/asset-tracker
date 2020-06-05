const express = require('express')
const path = require('path');
const mongoose = require('mongoose');

const port = process.env.PORT || 3000;

var locationsRouter = require('./routes/locations');
var assetTypeRouter = require('./routes/assetTypes');
var usersRouter = require('./routes/users');
//var assetsRouter = require('./routes/assets');
var logsRouter = require('./routes/logs');


const app = express();

//Connect To DB
mongoose.connect('mongodb+srv://ranaco022:'+ 
	process.env.MONGO_ATLAS_PW +
	'@dashboard-rest-api-itz8p.mongodb.net/asset-records?retryWrites=true&w=majority',
	{ useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true }, 
	() => console.log('connected to DB!')
);

// app.set('view engine', 'pug');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use('/', locationsRouter);
app.use('/', assetTypeRouter);
app.use('/', usersRouter);
//app.use('/', usersRouter);
app.use('/', logsRouter);

app.listen(port, function () {
    console.log(`App is listening on port ${port}.`);
 });