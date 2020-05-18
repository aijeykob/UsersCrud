const Worker = require('../model/worker');
const moment = require('moment');
const paginate = require('jw-paginate');
exports.addWorker = async function (req, res) {
    try {
        const formattedBirthday = moment(`${req.body.year}-${req.body.month}-${req.body.day}`).format();
        const workerFromDb = await Worker.create({
            birthday: formattedBirthday,
            position: req.body.position,
            name: req.body.name,
            surname: req.body.surname,
            patronymic: req.body.patronymic,
            gender: req.body.gender,
            contact: req.body.contact,
            salary: req.body.salary,
            month: req.body.month,
            year: req.body.year,
            day: req.body.day
        });
        res.json(workerFromDb)
    } catch (err) {
        console.log(err);
        res.status(400).send({
            status: false,
            text: err
        })
    }
};
exports.getWorkers = async function (req, res) {
    try {
        const total = await Worker.count();
        const limit = 5; //Limit Workers
        const offset = req.body.data.offset * limit;  //How much skip for page
        const workersFromDb = await Worker.find({}, {__v: 0}).skip(offset).limit(limit)
        res.json({total, workersFromDb});
    } catch (err) {
        console.log(err);
        res.status(400).send({
            status: false,
            text: err
        })
    }
};
exports.deleteWorker = async function (req, res) {
    try {
        await Worker.deleteOne({_id: req.body.id}, {__v: 0});
        res.json({id: req.body.id})
    } catch (err) {
        console.log(err);
        res.status(400).send({
            status: false,
            text: err
        })
    }
};
exports.updateWorker = async function (req, res) {
    console.log(req.body);
    try {
        const formattedBirthday = moment(`${req.body.year}-${req.body.month}-${req.body.day}`).format();
        const worker = req.body;
        worker.birthday = formattedBirthday;
        const updatedWorker = await Worker.findByIdAndUpdate({_id: req.body._id}, worker, {new: true});
        res.json(updatedWorker)
    } catch (err) {
        console.log(err);
        res.status(400).send({
            status: false,
            text: err
        })
    }
};