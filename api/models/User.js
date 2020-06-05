const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
	id: {
		type: mongoose.Schema.Types.ObjectId
	},
	UserID: {
        type: String	
        //required: true
	} ,
	Username: {
		type: String
		//required: true
    },
    Email: {
		type: String,
        trim: true,
        lowercase: true,
        unique: true,
        required: 'Email address is required',
       // validate: [validateEmail, 'Please fill a valid email address'],
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']
    },
    Position: {
		type: String
		//required: true
    },
    Phone: {
        type: String,
        match: [/^(\+\d{1,2}\s?)?1?\-?\.?\s?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/, 'Please fill a valid telephone number']
        //required: true
        
    },
    RoomID: {
		type: String
		//required: true
    },
    UserType: {
		type: String
		//required: true
    },
    UserStatus: {
		type: String
		//required: true
    }
});

module.exports = mongoose.model('User', UserSchema);