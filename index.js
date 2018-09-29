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


app.post('', (req, res) => {
    req.db.collection('mensagens').insert(req.body, (erro) => {
        res.render('/parceiros');
    });
});

app.get('/admin/mensagens', (req, res) => {
    req.db.collection('mensagens').find().toArray((erro, dados) => {
        res.render('admin-parceiros', {'mensagens': dados});
    });
});

app.post('', (req, res) => {
    let string = `Nome: ${req.body.nome} \nEmail: ${req.body.email} \ntelefone: ${req.body.telefone} \n`;
})





// app.post('', (req, res) => {
//     req.db.collection('parceiros').insert(req.body, (erro) => {
//         console.log(erro);
//         res.render('obrigado.ejs');
//     });
// });

// app.get('/admin/parceiros', (req, res) => {
//     req.db.collection('parceiros').find().toArray((erro, dados) => {
//         res.render('admin-parceiros', {'parceiros': dados});
//     });
// });

// app.post('', (req, res) => {
//     let string = `Nome: ${req.body.nome} \nEmail: ${req.body.email} \ntelefone: ${req.body.telefone} \n`;
// });


app.listen(4000, () => {
    console.log('Servidor inicializado')
});