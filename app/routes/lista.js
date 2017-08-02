var converter = require("../scripts/converter");
var lista = require('../scripts/listar')
var fs = require('fs');
var path = './JSON';

module.exports = function (app) {

    app.get('/lista', function (req, res) {

        lista.lista()
            .then(function (files) {
                res.json(files);
            })
            .catch(function (err) {
                console.log(err);
            });
    });

    app.post('/lista', function (req, res) {
        //fs.writeFile('go.json', JSON.stringify(req.body));


        req.pipe(fs.createWriteStream('./JSON/' + req.headers.cc))
            .on('finish', function () {
                res.status(200).send('OK');
            });
    });






};