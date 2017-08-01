var converter = require("../scripts/converter");
var lista = require('../scripts/listar')
var fs = require('fs');
var qtd;

function geraNomeDoArquivo(requisicao) {
    var nome = './JSON/' + requisicao + qtd.length + '.json';
    return nome;
}



module.exports = function (app) {



    app.get('/lista', function (req, res) {

        lista.lista()
            .then(function (files) {
                res.json(files);
                qtd = files;
            })
            .catch(function (err) {
                console.log(err);
            });
    });

    app.post('/lista', function (req, res) {

        var atsafd = req.body.cc;
        var nome = geraNomeDoArquivo(atsafd);
        fs.writeFile(nome, JSON.stringify(req.body));
        res.send('OK');
    });




};