const UsersController = require('./controllers/users.controller');
const config = require('../common/config/env.config');

exports.routesConfig = function (app) {
    app.get('/users', [
        UsersController.list
    ]);
    app.get('/users/:userId', [
        UsersController.getById
    ]);
};
