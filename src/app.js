const express = require('express');
const cardapioRouter = require('./routes/cardapio');

const app = express();
const port = 3000;

app.use(express.json());
app.use('/uploads', express.static('uploads'));

app.use(cardapioRouter);

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});
