const mongoose = require('mongoose');

const RoomSchema = mongoose.Schema({
	id: {
		type: mongoose.Schema.Types.ObjectId
	},
	Code: {
        type: String	
        //required: true
    } ,
    Title: {
        type: String	
        //required: true
	} ,
	LocCode: {
		type: String
		//required: true
	}
});

module.exports = mongoose.model('Room', RoomSchema);