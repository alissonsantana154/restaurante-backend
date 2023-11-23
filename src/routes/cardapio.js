const express = require('express');
const cardapioController = require('../controllers/cardapioController');
const uploadMiddleware = require('../middleware/uploadMiddleware');

const router = express.Router();

router.get('/cardapio', cardapioController.getCardapio);
router.post('/cardapio', cardapioController.adicionarItem);
router.put('/cardapio/:id', cardapioController.atualizarItem);
router.delete('/cardapio/:id', cardapioController.excluirItem);

module.exports = router;
