const express = require("express");
const UserController = require('../controller/user');

const Router = express.Router();


Router.post('/signup', UserController.signup);
Router.post('/login', UserController.login);



module.exports = Router;