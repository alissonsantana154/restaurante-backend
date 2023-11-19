const db = require('../config/db');

exports.getCardapio = (req, res) => {
    db.query('SELECT * FROM alimentos', (err, results) => {
        if (err) {
            console.log(err);
            res.status(500).json({ error: 'Erro ao buscar o cardápio.' });
        } else {
            res.json(results)
        }
    });
};

exports.adicionarItem = (req, res) => {
    const { nome, tipo, descricao, preco } = req.body;
    const imagem_url = req.file ? req.file.filename : null;

    db.query(
        'INSERT INTO alimentos (nome, tipo, descricao, preco, imagem_url) VALUES (?, ?, ?, ?, ?)',
        [nome, tipo, descricao, preco, imagem_url],
        (err, result) => {
            if (err) {
                console.error(err);
                res.status(500).json({ error: 'Erro ao adicionar item ao cardápio.' });
            }else {
                res.json({ message: 'Item adicionado com sucesso.', id: result.insertId });
            }
        }
    );
};

exports.atualizarItem = (req, res) => {
    const itemId = req.params.id;
    const { nome, tipo, descricao, preco } = req.body;

    db.query(
        'UPDATE alimentos SET nome = ?, tipo = ?, descricao = ?, preco = ? WHERE id = ?',
        [nome, tipo, descricao, preco, itemId],
        err => {
            if (err) {
                console.error(err);
                res.status(500).json({ error: 'Erro ao atualizar item do cardápio.' });
            } else {
                res.json({ message: 'Item atualizado com sucesso.' });
            }
        }
    );
};

exports.excluirItem = (req, res) => {
    const itemId = req.params.id;

    db.query('DELETE FROM alimentos WHERE id = ?', [itemId], err => {
        if (err) {
            console.error(err);
            res.status(500).json({ error: 'Erro ao excluir item do cardápio.' });
        } else {
            res.json({ message: 'Item excluído com sucesso.' });
        }
    });
    };