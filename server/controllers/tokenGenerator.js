let jwt = require('jsonwebtoken');
let config = require('../config');
const bcrypt = require("bcryptjs");
const User = require('../model/user');

module.exports = class HandlerGenerator {
    async registration(req, res) {
        try {
            const userFromDb = await User.findOne({username: req.body.username});
            let token = jwt.sign({username: req.body.username, userId: req.userId},
                config.secret,
                {
                    expiresIn: '24h' // expires in 24 hours
                }
            );
            res.status(201).send({
                token: token,
                user: {username: userFromDb.username}
            })
        } catch (err) {
            console.log(err);
            res.status(400).send({
                status: false,
                text: err
            })
        }
    };

    async login(req, res) {
        const userFromDb = await User.findOne({username: req.body.username});

        if (userFromDb) {
            const passwordResult = bcrypt.compareSync(
                req.body.password,
                userFromDb.password
            );
            if (passwordResult) {
                let token = jwt.sign({username: req.body.username},
                    config.secret,
                    {
                        expiresIn: '24h' // expires in 24 hours
                    }
                );
                res.json({
                    token: token,
                    username: {
                        username: userFromDb.username,
                    }
                })
            } else {
                res.status(400).send({
                    status: false,
                    text: "Incorrect Password"
                })
            }
        } else {
            res.status(400).send({
                status: false,
                text: "Incorrect username"
            })
        }
    };
};