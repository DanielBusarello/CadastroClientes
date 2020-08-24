const express = require('express');
const router = express.Router();
const mysql = require('../mysql').pool;
const login = require('../middleware/login');

const pessoaController = require('../controllers/pessoaController');

router.get('/', login, pessoaController.getPessoa);
router.post('/', login, pessoaController.postPessoa);
router.get('/:id_pessoa', pessoaController.getPessoaById);
router.patch('/:id_pessoa', login, pessoaController.patchPessoa);
router.delete('/:id_pessoa', login, pessoaController.deletePessoa);

module.exports = router;