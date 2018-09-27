const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');

const app = express();
app.set('view engine', 'ejs');
app.use('/static', express.static('static'));
app.use(bodyParser.urlencoded());

app.get('', (req, res) => {
    res.render('index');
});

app.get('/views/Nossotrabalho.ejs', (req, res) => {
    res.render('NossoTrabalho');
});
app.get('/views/Parceiros.ejs', (req, res) => {
    res.render('Parceiros');
});
app.get('/views/agenda.ejs', (req, res) => {
    res.render('agenda');
});
app.get('/views/index.ejs', (req, res) => {
    res.render('index');
});


app.listen(4000, () => {
    console.log('Servidor inicializado')
});