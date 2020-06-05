const mongoose = require('mongoose');

const LogSchema = mongoose.Schema({
	id: {
		type: mongoose.Schema.Types.ObjectId
	},
	UserID: { type: String },
	Username: {	type: String },
    AssetID: { type: String },
    AMRNumber: { type: String },
    Description: { type: String  },
    Comments: {type: String  },
    Timestamp: {type: Date},
    Status: {type: String},
    RoomTitle: {type: String },
    ExpectedReturn: {type: Date}
});

module.exports = mongoose.model('Log', LogSchema);