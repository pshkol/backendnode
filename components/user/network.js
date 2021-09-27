// const express = require('express');
// const router = express.Router();
// const response = require('../../network/response');
// const controller = require('./controller');
//
// router.get('/', function (req, res) {
//   controller.listUsers()
//     .then(function (data) {
//       response.success(req, res, data, 200);
//     })
//     .catch(function (e) {
//       response.error(req, res, 'Internal error', 500, e);
//     })
// })
//
// router.post('/', function (req, res) {
//   controller.addUser(req.body.name)
//     .then(function (data) {
//       response.success(req, res, data, 201);
//     })
//     .catch(function (e) {
//       response.error(req, res, 'Internal error', 500, e);
//     })
// })
//
// module.exports = router;
const express = require('express');
const response = require('../../network/response');
const controller = require('./controller');
const router = express.Router();

router.post('/', function(req, res) {
    controller.addUser(req.body.name)
        .then(data => {
            response.success(req, res, data, 201);
        })
        .catch(err => {
            response.error(req, res, 'Internal error', 500, err);
        });
});

router.get('/', function(req, res) {
    controller.listUsers()
        .then(users => {
            response.success(req, res, users, 200);
        })
        .catch(err => {
            response.error(req, res, 'Internal error', 500, err);
        });
});

module.exports = router;
