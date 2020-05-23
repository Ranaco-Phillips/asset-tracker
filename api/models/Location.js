const mongoose = require('mongoose');

const LocationSchema = mongoose.Schema({
	id: {
		type: mongoose.Schema.Types.ObjectId
	},
	LocCode: {
        type: String	
        //required: true
	} ,
	Description: {
		type: String
		//required: true
	}
});

module.exports = mongoose.model('Location', LocationSchema);