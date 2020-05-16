const Worker = require('../model/worker');
const moment = require('moment');
exports.addWorker = async function (req, res) {
    try {
        const formattedBirthday = moment(`${req.body.year}-${req.body.month}-${req.body.day}`).format();
        const workerFromDb = await Worker.create({
            birthday: formattedBirthday,
            position: req.body.position,
            name:req.body.name,
            surname:req.body.surname,
            patronymic:req.body.patronymic,
            gender:req.body.gender,
            contact:req.body.contact,
            salary:req.body.salary,
        });
        res.json(workerFromDb)
    } catch (err) {
        console.log(err);
        res.status(400).json({
            text: err
        })
    }
};