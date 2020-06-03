const User = require('../model/user');
const bcrypt = require('bcryptjs');

exports.registration = async function (req, res, next) {

	try {
		const salt = bcrypt.genSaltSync(10);
		const password = req.body.password;
		await User.create({
			username: req.body.username,
			password: bcrypt.hashSync(password, salt),
		});
		next();
	} catch (err) {
		console.log(err);
		res.status(400).send({
			status: false,
			text: err
		});
	}

};
exports.viewProfile = async function (req, res) {
	try {
		const userFromDb = await User.findOne({username: req.decoded.username});
		res.json({username: userFromDb.username});
	} catch (err) {
		console.log(err);
		res.status(400).send({
			status: false,
			text: err
		});
	}
};