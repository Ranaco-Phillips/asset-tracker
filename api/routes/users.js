const express = require('express');

const router = express.Router();
const mongoose = require('mongoose');
const User = require('../models/User');

//Retrieve all documents or records from the database
router.get('/users', (req, res) => {
	User.find()
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
router.post('/users', (req, res) => {
	const user = new User({
		_id: new mongoose.Types.ObjectId(),
        UserID: req.body.UserID,
        Username: req.body.Username,
        Email: req.body.Email,
        Position: req.body.Position,
        Phone: req.body.Phone,
        RoomID: req.body.RoomID,
        UserType: req.body.UserType,
		UserStatus: req.body.UserStatus
	});
	user.save().then(result => {
		console.log(result);
		res.status(201).json({
			message:"Handling POST request to users",
			createdUser: user
		});
	})
	.catch(err => {
		console.log(err);
		res.status(500).json({error: err});
	});

});

module.exports = router;