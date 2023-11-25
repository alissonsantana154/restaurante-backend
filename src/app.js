const express = require('express');
const cardapioRouter = require('./routes/cardapio');

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.use(cardapioRouter);

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});
