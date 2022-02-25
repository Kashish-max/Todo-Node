const UserModel = require('../models/users.model');
const crypto = require('crypto');
const axios = require('axios');
const apiKey = '5ab5532999d7f7d9369957d7691f1112';
const urlWeatherApi = "https://api.openweathermap.org/data/2.5/weather";
const urlOneCallApi = "https://api.openweathermap.org/data/2.5/onecall";

exports.insert = (req, res) => {
    let salt = crypto.randomBytes(16).toString('base64');
    let hash = crypto.createHmac('sha512', salt).update(req.body.password).digest("base64");
    req.body.password = salt + "$" + hash;
    req.body.permissionLevel = 1;
    UserModel.createUser(req.body)
        .then((result) => {
            res.status(201).send({id: result._id});
        });
};

exports.list = (req, res) => {
    let limit = req.query.limit && req.query.limit <= 100 ? parseInt(req.query.limit) : 10;
    let page = 0;
    if (req.query) {
        if (req.query.page) {
            req.query.page = parseInt(req.query.page);
            page = Number.isInteger(req.query.page) ? req.query.page : 0;
        }
    }
    UserModel.list(limit, page)
        .then((result) => {
            res.status(200).send(result);
        })
};

exports.getById = (req, res) => {
    UserModel.findById(req.params.userId)
        .then((result) => {
            res.status(200).send(result);
        });
};

exports.getByEmail = (req, res) => {
    UserModel.findByEmail(req.params.userEmail)
        .then((result) => {
            res.status(200).send(result[0]);
        });
};

exports.removeById = (req, res) => {
    UserModel.removeById(req.params.userId)
        .then((result)=>{
            res.status(204).send({});
        });
};

exports.fetchWeatherDataByState = (req, res) => {
    axios.get(`${urlWeatherApi}?q=${req.query.city}&appid=${apiKey}`)
    .then(response => {
        res.send(response.data)
    })
    .catch(error => {
        res.send(error);
    });
}
