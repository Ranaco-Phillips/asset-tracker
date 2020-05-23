const express = require('express');

const router = express.Router();
const mongoose = require('mongoose');
const Location = require('../models/Location');

/* GET home page. */
router.get('/', function(req, res) {
    //res.render('index', { title: 'Asset Tracker' });
    res.send("Asset Tracker");
  });

  //Retrieve all documents or records from the database
router.get('/loc', (req, res) => {
	Location.find()
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
router.post('/loc', (req, res) => {
	const location = new Location({
		_id: new mongoose.Types.ObjectId(),
		LocCode: req.body.LocCode,
		Description: req.body.Description
	});
	location.save().then(result => {
		console.log(result);
		res.status(201).json({
			message:"Handling POST request to locations",
			createdLocation: location
		});
	})
	.catch(err => {
		console.log(err);
		res.status(500).json({error: err});
	});

});

//Retrieve a specific document or record from the database
/* router.get('/:locationId', async (req, res) => {
	Location.findById(req.params.locationId)
		.exec()
		.then(doc => {
			console.log(doc);
			if(doc){
				res.status(200).json(doc);
			} else{
				res.status(404).json({message: 'No valid entry found for ID'});
			}
			
		})
		.catch(err => {
			console.log(err);
			res.status(500).json({error: err});
		}); 
}); */

//Delete a document or record to the database
router.delete('/:locationId', async (req,res) =>{
	Location.deleteOne({_id: req.params.locationId})
		.exec()
		.then(result => {
			res.status(200).json(result);
		})
		.catch(err => {
			console.log(err);
			res.status(500).json({error: err});
		});

});

//Update a document or record to the database
router.patch('/:locationId', async (req,res) =>{
	const updateFields = {};
	
	//Search and compare fields entered with those in the doc
	for(const fields of req.body){
		updateFields[fields.propName] = fields.value;
	}

	//update any fields changed
	Location.update({_id: req.params.locationId},{$set: updateFields})
		.exec()
		.then(result => {
			res.status(200).json(result);
		})
		.catch(err => {
			console.log(err);
			res.status(500).json({error: err});
		});
});

module.exports = router;