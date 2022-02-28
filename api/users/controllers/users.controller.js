const axios = require('axios');
const urlApi = "https://jsonplaceholder.typicode.com";

const findTodoById = (user_id) => {
    return new Promise((resolve, reject) => {
        axios.get(`${urlApi}/todos`)
        .then(async(response) => {
            resolve(response.data.filter((el) => { return (el.userId == user_id) }))
        })
        .catch(error => {
            reject(error)
        });
    }) 
}

exports.getTodoList = (req, res) => {
    console.log("--Todo list requested--")

    axios.get(`${urlApi}/todos`)
    .then((response) => {
        response.data.forEach((el) => { (delete el.userId) })
        res.send(response.data)
    })
    .catch(error => {
        res.send(error)
    });
}

exports.getUserlist = (req, res) => {
    console.log("--User list requested--")

    axios.get(`${urlApi}/users`)
    .then((response) => {
        res.send(response.data)
    })
    .catch(error => {
        res.send(error);
    });
}

exports.getUserById = (req, res) => {
    console.log("--User Info requested--")

    axios.get(`${urlApi}/users/${req.params.userId}`)
    .then((response) => {
        findTodoById(req.params.userId).then((result) => {
            response.data.todos = result
            res.send(response.data)            
        }).catch(error => {
            res.send(error);
        })
    })
    .catch(error => {
        res.send(error);
    });
}