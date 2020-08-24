const mysql = require('../mysql');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

exports.cadastro = async (req, res, next) => {
    try {
        let query = 'SELECT * FROM usuarios WHERE email = ?';
        let result = await mysql.execute(query, [req.body.email]);

        if(result.length > 0) {
            res.status(409).send({ mensagem: 'Usuario já cadastrado'});
        }

        const hash = await bcrypt.hashSync(req.body.senha, 10);

        query = `INSERT INTO usuarios (email, senha) VALUES (?,?)`;
        const results = await mysql.execute(query, [req.body.email, hash]);

        response = {
            mensagem: 'Usuario criado com sucesso',
            usuarioCriado: {
                id_usuario: results.insertId,
                email: req.body.email
            }
        }
        return res.status(201).send(response);
    } catch (error) { 
        return res.status(500).send({ error: error });
    }
};

exports.login = async (req, res, next) => {
    try {
        const query = `SELECT * FROM usuarios WHERE email = ?`;
        let results = await mysql.execute(query, [req.body.email]);

        if (results.length < 1) {
            return res.status(401).send({ message: 'Falha na autenticação' })
        }

        if (await bcrypt.compareSync(req.body.senha, results[0].senha)) {
            const token = jwt.sign({
                id_user: results[0].id_user,
                email: results[0].email
            },
            process.env.JWT_KEY,
            {
                expiresIn: "1h"
            });
            return res.status(200).send({
                message: 'Autenticado com sucesso',
                token: token
            });
        }
        return res.status(401).send({ message: 'Falha na autenticação' })

    } catch (error) {
        return res.status(500).send({ message: 'Falha na autenticação' });
    }
};

