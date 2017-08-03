var converter = require("../scripts/converter");
var lista = require('../scripts/listar')
var download = require('download-file');
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


    app.get('/download/:name', function (req, res) {

        var nomeDoArquivo = req.params.name;
        fs.readFile('./JSON/' + nomeDoArquivo, function (err, content) {
            if (err) {
                res.writeHead(400, { 'Content-type': 'text/html' })
                console.log(err);
                res.end("No such file");
            } else {
                //specify Content will be an attachment
                res.setHeader('Content-disposition', 'attachment; filename=' + nomeDoArquivo);
                res.end(content);
            }
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