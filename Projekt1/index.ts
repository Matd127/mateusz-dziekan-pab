const express = require('express')  
const app = express()  

app.get('/', function (req, res) {  
  res.send('Hello World')  
})  

app.get('/:operacja/:num1/:num2', function(req, res){

    let operacja = req.params.operacja
    let num1 : number = parseInt(req.params.num1)
    let num2 : number = parseInt(req.params.num2)

    if(operacja == 'dodaj'){
      let wynik : number = num1 + num2
      res.send(''+ wynik)  
    }

    if(operacja == 'usun'){
      let wynik : number = num1 - num2
      res.send(''+ wynik)  
    }

    if(operacja == 'podziel'){
      let wynik : number = num1 / num2
      res.send(''+ wynik)  
    }

    if(operacja == 'pomnoz') {
      let wynik : number = num1 * num2
      res.send(''+ wynik)  
    }
})


app.listen(3000)  