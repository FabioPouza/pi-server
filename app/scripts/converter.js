var fs = require('fs');
var stringDoArquivo;
var cont = 0;

module.exports = {
    converter: function (json) {
        stringDoArquivo = null;
        json.forEach(function (object) {
            // if (object.inputType === 'text') {
            //     console.log(object);
            //     saveInputText(object);
            // }
            // if (object.inputType === 'checkbox' && object.value === true) {
            //     saveInputCheck(object);
            // }

            // if (object.subQuestions) {
            //     console.log(object.label.description);
            //     console.log(object.value);

            //  }
            if (object.type === 'textarea') {
                console.log(object.value);
            }
        }, this);
        console.log(stringDoArquivo);
        // fs.writeFile('./TXT/test.txt', stringDoArquivo, function (err, result) {
        //     if (err) {
        //         console.log(err);
        //     } else {
        //         console.log(result);
        //     }
        // });
    }
}
function saveInputText(object) {
    var linha = `Nome: ${object.value} \n`;
    if (!stringDoArquivo) {
        stringDoArquivo = linha;
    }
    else {
        stringDoArquivo += linha;
    }
}

function saveInputCheck(object) {
    var linha = `${object.label.description} ${object.value} \n`;
    if (!stringDoArquivo) {
        stringDoArquivo = linha;
    }
    else {
        stringDoArquivo += linha;
    }
}
