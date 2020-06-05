const express = require('express');

const router = express.Router();
const mongoose = require('mongoose');
const AssetType = require('../models/AssetType');

  //Retrieve all documents or records from the database
router.get('/asset-type', (req, res) => {
	AssetType.find()
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
router.post('/asset-type', (req, res) => {
	const assetType = new AssetType({
		_id: new mongoose.Types.ObjectId(),
		AssetCode: req.body.AssetCode,
		Type: req.body.Type
	});
	assetType.save().then(result => {
		console.log(result);
		res.status(201).json({
			message:"Handling POST request to asset types",
			createdAssetType: assetType
		});
	})
	.catch(err => {
		console.log(err);
		res.status(500).json({error: err});
	});

});

module.exports = router;