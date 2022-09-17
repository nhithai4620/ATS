var mongoose = require('mongoose');
var Schema = mongoose.Schema;

const userSchema = new Schema( {
	email:{
		type: String,
		required: true,
		unique: true 
	},
	password:{
		type: String,
		required: true,
	},
	phone:{
		type: Number,
		required: false
	},
	firstName:{
		type: String,
		required: false,
	},
	lastName:{
		type: String,
		required: false,
	},
	jobTittle:{
		type: String,
		required: false,
	},
	dob:{
		type: String,
		required: false
	},
});

let User = mongoose.model('User', userSchema);

module.exports = {User};