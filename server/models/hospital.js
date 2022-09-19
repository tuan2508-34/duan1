const mongoose = require('mongoose')
const Schema = mongoose.Schema

const Supplier = new Schema({
	username: {
		type: String
	},
	address:{
		type: String
	},
	phone: {
		type: Number
	},
	email:{
		type: String
	}	
})

module.exports = mongoose.model('supplier',Supplier )