const UsersController = require('./controllers/users.controller');
const config = require('../common/config/env.config');

exports.routesConfig = function (app) {
    app.get('/todos', [
        UsersController.getTodoList        
    ]);
    app.get('/users', [
        UsersController.getUserlist
    ]);
    app.get('/users/:userId', [
        UsersController.getUserById
    ]);
};
