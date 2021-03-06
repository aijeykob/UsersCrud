const routes = require('express').Router();
const tokenGenerator = require('../controllers/tokenGenerator');
const userController = require('../controllers/UserController');
const workerController = require('../controllers/WorkerController');
const tokenMiddleware = require('../middlewares/tokenMiddleware');
const validatorMiddleware = require('../middlewares/validatorMiddleware');
let token = new tokenGenerator();
routes.post('/registration', validatorMiddleware.checkRegistration, userController.registration, token.registration);
routes.post('/login', validatorMiddleware.checkLogin, token.login);
routes.post('/checkToken', tokenMiddleware.checkToken, userController.viewProfile);
routes.post('/addWorker', validatorMiddleware.checkAddWorker, tokenMiddleware.checkToken, workerController.addWorker);
routes.post('/deleteWorker', validatorMiddleware.checkDeleteWorker, tokenMiddleware.checkToken, workerController.deleteWorker);
routes.post('/updateWorker', validatorMiddleware.checkUpdateWorker, tokenMiddleware.checkToken, workerController.updateWorker);
routes.post('/getWorkers', tokenMiddleware.checkToken, workerController.getWorkers);
module.exports = routes;
//comment