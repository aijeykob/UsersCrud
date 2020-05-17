const User = require('../model/user');
const checkRegistration = async (req, res, next) => {
    const userFromDb = await User.findOne({username: req.body.username});
    const validatedUsername = req.body.username.match(/^[a-zA-Z][a-zA-Z0-9-_\.]{1,20}$/i);
    const validatedPassword = req.body.password.match(/^(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/i);
    if (userFromDb) {
        res.status(400).send({
            status: false,
            text: "This user already exist"
        })
    } else if (!validatedUsername) {
        res.status(400).send({
            status: false,
            text: "Invalid username"
        })
    } else if (!validatedPassword) {
        res.status(400).send({
            status: false,
            text: "Invalid password"
        })
    } else {
        next()
    }
};
const checkLogin = async (req, res, next) => {
    const validatedUsername = req.body.username.match(/^[a-zA-Z][a-zA-Z0-9-_\.]{1,20}$/i);
    const validatedPassword = req.body.password.match(/^(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/i);
    if (!validatedUsername) {
        res.status(400).send({
            status: false,
            text: "Invalid username"
        })
    } else if (!validatedPassword) {
        res.status(400).send({
            status: false,
            text: "Invalid password"
        })
    } else {
        next()
    }
};
const checkAddWorker = async (req, res, next) => {
    //     position: req.body.position,
    //     name:req.body.name,
    //     surname:req.body.surname,
    //     patronymic:req.body.patronymic,
    //     gender:req.body.gender,
    //     contact:req.body.contact,
    //     salary:req.body.salary,
    //     month:req.body.month,
    //     year:req.body.year,
    //     day:req.body.day
    if (!req.body.position || !req.body.surname || !req.body.patronymic || !req.body.gender
        || !req.body.contact || !req.body.salary || !req.body.month || !req.body.year || !req.body.day) {
        res.status(400).send({
            status: false,
            text: "Please fill all fields"
        });
        return

    }
    const validatedName = req.body.name.match(/^[а-яА-ЯёЁa-zA-Z0-9_\.]{1,20}$/i);
    const validatedSurname = req.body.surname.match(/^[а-яА-ЯёЁa-zA-Z0-9_\.]{1,20}$/i);
    const validatedPatronymic = req.body.patronymic.match(/^[а-яА-ЯёЁa-zA-Z0-9_\.]{1,20}$/i);
    const validatedPosition = req.body.position.match(/^[а-яА-ЯёЁa-zA-Z0-9_\.]{1,20}$/i);
    const validatedSalary = req.body.salary.toString().match(/^[0-9]*[.,]?[0-9]+$/i);
    const validatedContact = req.body.contact.match(/^[а-яА-ЯёЁa-zA-Z0-9_\.]{1,20}$/i);


    if (!validatedName || !validatedSurname || !validatedPatronymic || !validatedPosition
        || !validatedSalary || !validatedContact) {
        res.status(400).send({
            status: false,
            text: "Please enter correct date"
        });
        return

    } else {
        console.log('else')
        next()
    }

};
module.exports = {checkRegistration, checkLogin, checkAddWorker};