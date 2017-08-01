var fs = require('fs');

module.exports = {

    lista: function () {
        return new Promise(function (resolve, reject) {
            fs.readdir('./JSON', function (err, files) {
                if (err) {
                    reject(err);
                } else {
                    resolve(files);
                }
            });
        });
    }
}
