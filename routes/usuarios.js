const express = require('express');
const router = express.Router();

const usuariosController = require('../controllers/usuariosController');

router.post('/cadastro', usuariosController.cadastro);
router.post('/login', usuariosController.login);

module.exports = router;