const routes = require('express').Router();
const tokenGenerator = require('../controllers/tokenGenerator');
const userController = require('../controllers/UserController');
const workerController = require('../controllers/WorkerController');
const middleware = require('../middleware');
let token = new tokenGenerator();



routes.post('/registration', userController.registration, token.registration);
routes.post('/login', token.login);
routes.post('/checkToken', middleware.checkToken,userController.viewProfile);
routes.post('/addWorker', middleware.checkToken,workerController.addWorker);
module.exports = routes;