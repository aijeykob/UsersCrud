const bcrypt = require("bcryptjs");
const User = require('../model/user');


exports.registration = async function (req, res, next) {
    const userFromDb = await User.findOne({username: req.body.username});
    const validatedUsername = req.body.username.match(/^[a-zA-Z][a-zA-Z0-9-_\.]{1,20}$/i);
    if (userFromDb) {
        res.status(400).send({
            status: false,
            text: "This user already exist"
        })
    } else if(!validatedUsername ){
        res.status(400).send({
            status: false,
            text: "Invalid username"
        })
    }
    else {
        try {
            const salt = bcrypt.genSaltSync(10);
            const password = req.body.password;
            const createdUser = await User.create({
                username: req.body.username,
                password: bcrypt.hashSync(password, salt),
            });
            next()
        } catch (err) {
            console.log(err);
            res.status(400).json({
                text: err
            })
        }
    }
};
exports.viewProfile = async function (req, res) {
    try {
        const userFromDb = await User.findOne({username: req.decoded.username});
        res.json({username:userFromDb.username})
    } catch (err) {
        console.log(err);
        res.status(400).json({
            text: err
        })
    }
};