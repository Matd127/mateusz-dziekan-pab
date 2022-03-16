var express = require('express');
var app = express();
app.get('/', function (req, res) {
    res.send('Hello World');
});
app.get('/:operacja/:num1/:num2', function (req, res) {
    var operacja = req.params.operacja;
    var num1 = parseInt(req.params.num1);
    var num2 = parseInt(req.params.num2);
    if (operacja == 'dodaj') {
        var wynik = num1 + num2;
        res.send('' + wynik);
    }
    if (operacja == 'usun') {
        var wynik = num1 - num2;
        res.send('' + wynik);
    }
    if (operacja == 'podziel') {
        var wynik = num1 / num2;
        res.send('' + wynik);
    }
    if (operacja == 'pomnoz') {
        var wynik = num1 * num2;
        res.send('' + wynik);
    }
});
app.listen(3000);
