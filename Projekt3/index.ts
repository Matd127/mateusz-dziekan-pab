import { json } from 'body-parser'
import express from 'express'
import {Request, Response} from 'express'
import { Restauracja } from './Models/Restauracja'

const app = express()
const router = express()
app.use(express.json())


const restauracje: Restauracja[] = []

//Restauracja CRUD

//DODAWANIE
app.post('/dodajRestauracje', (req, res) => {
  const restauracja: Restauracja = req.body
  restauracja.id = Date.now();
  restauracje.push(restauracja)

  console.log(restauracja)
  res.status(201).json(restauracja)
})

//ODCZYT
app.get('/Restauracje', (req, res) => {
  res.status(200).send(restauracje)
})

//ODCZYT PO ID
app.get('/Restauracja/:id', (req, res) =>{
    const id = Number(req.params.id)
    const restauracja = restauracje.find(restauracja => restauracja.id === id)
    res.status(200).json(restauracja)
})

//EDYCJA RESTAURACJI

app.listen(3000)