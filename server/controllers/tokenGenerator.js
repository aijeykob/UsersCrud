let jwt = require('jsonwebtoken');
let config = require('../config');
const bcrypt = require("bcryptjs");
const User = require('../model/user');

module.exports = class HandlerGenerator {
    async registration(req, res) {
        const userFromDb = await User.findOne({username: req.body.username});
        let token = jwt.sign({username: req.body.username, userId: req.userId},
            config.secret,
            {
                expiresIn: '24h' // expires in 24 hours
            }
        );
        res.json({
            token: token,
            user: {username: userFromDb.username}
        })
    };

    async login(req, res) {
        console.log('in login')
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
                res.status(401).send({
                    success: false,
                    message: 'Incorrect password!',
                })
            }
        } else {
            res.status(401).send({
                success: false,
                message: 'Incorrect username!',
            })
        }
    };
};