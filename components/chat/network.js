// const express = require('express');
// const router = express.Router();
// const response = require('../../network/response');
// const controller = require('./controller');
//
// router.get('/:userid', function (req, res) {
//   controller.getChats(req.params.userid)
//     .then(function (data) {
//       response.success(req, res, data, 200);
//     })
//     .catch(function (e) {
//       response.error(req, res, 'Invalid data', 500, e);
//     })
// })
//
// router.post('/', function (req, res) {
//   controller.addChat(req.body.users)
//     .then(function (data) {
//       response.success(req, res, data, 200);
//     })
//     .catch(function (e) {
//       response.error(req, res, 'Invalid data', 500 ,e);
//     })
// })
//
// module.exports = router;
const express = require('express');
const response = require('../../network/response');
const controller = require('./controller');
const router = express.Router();

router.post('/', function(req, res) {
    controller.addChat(req.body.users)
        .then(data => {
            response.success(req, res, data, 201);
        })
        .catch(err => {
            response.error(req, res, 'Internal error', 500, err);
        });
});

router.get('/:userId', function(req, res) {
    controller.listChats(req.params.userId)
        .then(users => {
            response.success(req, res, users, 200);
        })
        .catch(err => {
            response.error(req, res, 'Internal error', 500, err);
        });
});

module.exports = router;
