var converter = require("../../scripts/converter");

module.exports = function (app) {

    app.post('/templated', function (req, res) {
        var json = req.body;
        //console.log(json);

        // converter.comprar
        converter.converter(json);
    });
}