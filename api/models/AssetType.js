const mongoose = require('mongoose');

const AssetTypeSchema = mongoose.Schema({
	id: {
		type: mongoose.Schema.Types.ObjectId
	},
	AssetCode: {
        type: String	
        //required: true
	} ,
	Type: {
		type: String
		//required: true
	}
});

module.exports = mongoose.model('Asset Type', AssetTypeSchema);