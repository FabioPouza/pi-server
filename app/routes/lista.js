var converter = require("../scripts/converter");
var lista = require('../scripts/listar')
var fs = require('fs');

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
}