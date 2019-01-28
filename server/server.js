const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const port = 8080;

app.use(bodyParser.json());

app.listen(8080, (err) => {
    if (err) throw err;
    console.log('Serveur connecté sur le port ' + port);
})