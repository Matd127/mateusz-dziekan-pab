const express = require('express')  
const app = express()  

// const num1 = 5;
// const num2 = 3;
// const dodaj = num1 + num2;
// const usun = num1 - num2;
// const podziel = num1 / num2;
// const pomnoz = num1 - num2;

app.get('/', function (req, res) {  
  res.send('Hello World')  
})  

app.get('/:num1/:num2', function(req, res){
    const operation = req.query
    const num1 = req.query.num1
    const num2 = req.query.num2
    res.send(num1 + num2)
    
})



app.listen(3000)  