const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const WorkerSchema = new Schema({
	birthday: Date,
	position: String,
	name: String,
	surname: String,
	patronymic: String,
	month: String,
	year: String,
	day: String,
	gender: {
		type: String,
		enum: ['male', 'female']
	},
	contact: String,
	salary: Number,

});
const Worker = mongoose.model('workers', WorkerSchema);

module.exports = Worker;