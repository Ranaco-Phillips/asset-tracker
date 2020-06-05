const express = require('express');

const router = express.Router();
const mongoose = require('mongoose');
const Log = require('../models/Log');

//Retrieve all documents or records from the database
router.get('/log', (req, res) => {
	Log.find()
	.exec()
	.then(docs => {
		console.log(docs);
		res.status(200).json(docs);
	})
	.catch(err => {
		console.log(err);
		res.status(500).json({error: err});
	});
});

//Add a document or record to the database
router.post('/log', (req, res) => {
	const log = new Log({
		_id: new mongoose.Types.ObjectId(),
        UserID: req.body.UserID,
        Username: req.body.Username,
        AssetID: req.body.AssetID,
        AMRNumber: req.body.AMRNumber,
        Description: req.body.Description,
        Comments: req.body.Comments,
        TimeStamp: req.body.TimeStamp,
        Status: req.body.Status,
        RoomTitle: req.body.RoomTitle,
        ExpectedReturn: req.body.ExpectedReturn
	});
	log.save().then(result => {
		console.log(result);
		res.status(201).json({
			message:"Handling POST request to users",
			createdLog: log
		});
	})
	.catch(err => {
		console.log(err);
		res.status(500).json({error: err});
	});

});

module.exports = router;