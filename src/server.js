const express = require('express');

const app = express();
const port = 5000;
//Essa função get recebe dois argumentos:
app.get('/', (req, res) => {                    // '/' é o caminho.
    res.sendFile('index.html', {root: __dirname}); // Uma função de callback que será disparada.
});

app.listen(port, () => {                    // Para começar a escutar por requisição na porta e rota criados.
    console.log(`Now listening on port ${port}`);
});