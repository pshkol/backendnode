// const express = require('express');
// const router = express.Router();
// const response = require('../../network/response');
// const controller = require('./controller');
//
// router.get('/', function (req, res) {
//   // console.log(req.headers);
//   // res.header({
//   //   "custom-header": "Nuestro valor personalizado"
//   // })
//   // res.status(201).send({error: '', body: 'Creado correctamente'});
//   // response.success(req, res, "Lista de mensajes");
//
//   const filterMessages = req.query.user || null;
//
//   controller.getMessages(filterMessages)
//     .then(function (messageList) {
//       response.success(req, res, messageList, 200);
//     })
//     .catch(function (e) {
//       response.error(req, res, "Unexpected error", 500, e);
//     })
// })
//
// router.post('/', function (req, res) {
//   // console.log(req.query);
//   // res.send('Mensaje anadido ' + req.body.text);
//
//   controller.addMessage(req.body.user, req.body.message)
//     .then(function (fullMessage) {
//       response.success(req, res, fullMessage, 201);
//     })
//     .catch(function (e) {
//       response.error(req, res, 'Informacion invalida', 400, e)
//     })
//
//   // if (req.query.error == "ok") {
//   //   response.error(req, res, 'error inesperado', 500, "Es solo una simulacion de los errores")
//   // } else {
//   //   response.success(req, res, "Creado correctamente", 201);
//   // }
// })
//
// router.patch('/:id', function (req, res) {
//   controller.updateMessage(req.params.id, req.body.message)
//     .then(function (data) {
//       response.success(req, res, data, 200);
//     })
//     .catch(function (e) {
//       response.error(req, res, "Error interno", 500, e);
//     })
// })
//
// router.delete('/:id', function (req, res) {
//   controller.deleteMessage(req.params.id)
//     .then(function () {
//       response.success(req, res, `Usuario ${req.params.id} eliminado`, 200);
//     })
//     .catch(function (e) {
//       response.error(req, res, "Error interno", 500, e);
//     })
// })
//
// module.exports = router;
const express = require('express');
const multer = require('multer');

const response = require('../../network/response');
const controller = require('./controller');
const router = express.Router();

const upload = multer({
    dest: 'public/files/',
});

router.get('/', function (req, res) {
    const filterMessages = req.query.chat || null;
    controller.getMessages(filterMessages)
        .then((messageList) => {
            response.success(req, res, messageList, 200);
        })
        .catch(e => {
            response.error(req, res, 'Unexpected Error', 500, e);
        })
});
router.post('/', upload.single('file'), function (req, res) {
    controller.addMessage(req.body.chat, req.body.user, req.body.message, req.file)
        .then((fullMessage) => {
            response.success(req, res, fullMessage, 201);
        })
        .catch(e => {
            response.error(req, res, 'Informacion invalida', 400, 'Error en el controlaor');
        });
});
router.patch('/:id', function (req, res) {
    controller.updateMessage(req.params.id, req.body.message)
        .then((data) => {
            response.success(req, res, data, 200);
        })
        .catch(e => {
            response.error(req, res, 'Error interno', 500, e);
        });
});

router.delete('/:id', function(req, res) {
    controller.deleteMessage(req.params.id)
        .then(() => {
            response.success(req, res, `Mensaje ${req.params.id} eliminado`, 200);
        })
        .catch(e => {
            response.error(req, res, 'Error interno', 500, e);
        });
});

module.exports = router;
