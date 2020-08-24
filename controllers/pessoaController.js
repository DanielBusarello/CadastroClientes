const mysql = require('../mysql');

exports.getPessoa = async (req, res, next) => {
    try {
        const query = "SELECT * FROM pessoa";
        const result = await mysql.execute(query);
        const response = {
            quantidade: result.length,
            pessoas: result.map(pessoa => {
                return {
                    id_pessoa: pessoa.id_pessoa,
                    nome: pessoa.nome,
                    idade: pessoa.idade,
                    altura: pessoa.altura,
                    peso: pessoa.peso,
                    telefone: pessoa.telefone,
                    email: pessoa.email,
                }
            })
        }
        return res.status(200).send({ response: response })
    } catch (error) {
        return res.status(500).send({ error: error });
    }
};

exports.postPessoa = async (req, res, next) => {
    try {
        const query = 'INSERT INTO pessoa (nome, idade, altura, peso, telefone, email) VALUES (?,?,?,?,?,?)';
        const result = await mysql.execute(query, [req.body.nome, req.body.idade, req.body.altura, req.body.peso, req.body.telefone, req.body.email]);
        const response = {
            mensagem: 'Pessoa cadastrada com sucesso',
            pessoaCriada: {
                id_pessoa: result.id_pessoa,
                nome: req.body.nome,
                idade: req.body.idade, 
                altura: req.body.altura, 
                peso: req.body.peso, 
                telefone: req.body.telefone, 
                email: req.body.email,
            }
        }
        return res.status(201).send(response);
    } catch {
        if (error) { return res.status(500).send({ error: error }) }
    }
}

exports.patchPessoa = async (req, res, next) => {
    try {
        const query = `UPDATE   pessoa 
                          SET   nome        = ?, 
                                idade       = ?, 
                                altura      = ?, 
                                peso        = ?, 
                                telefone    = ?, 
                                email       = ?
                        WHERE   id_pessoa   = ?`;
        const result = await mysql.execute(query, [req.body.nome, req.body.idade, req.body.altura, req.body.peso, req.body.telefone, req.body.email, req.params.id_pessoa]);
        const response = {
            mensagem: 'Pessoa alterada com sucesso',
            pessoaAlterada: {
                id_pessoa: result.id_pessoa,
                nome: req.body.nome,
                idade: req.body.idade, 
                altura: req.body.altura, 
                peso: req.body.peso, 
                telefone: req.body.telefone, 
                email: req.body.email,
            }
        }
        return res.status(201).send(response);
    } catch (error) {
        if (error) { return res.status(500).send({ error: error }) }
    }
}

exports.deletePessoa = async (req, res, next) => {
    try {
        const query = `DELETE FROM pessoa WHERE id_pessoa = ?`;
        await mysql.execute(query, [req.params.id_pessoa]);

        const response = {
            mensagem: 'Pessoa removida com sucesso',
        }

        return res.status(202).send(response);
    } catch (error) {
        if (error) { return res.status(500).send({ error: error }) }
    }
}