import {Request, Response} from 'express'
import { Restaurant, validate} from '../Models/Restaurant'
import express from 'express';

const router = express.Router();
const app = express()
app.use(express.json())

const restaurants: Restaurant[] = []

router.post('/add', (req: Request, res: Response) => {
  const restaurant: Restaurant = req.body
  if(validate(restaurant) == false)
    res.status(404).send("Null values")
  restaurant.id = Date.now();
  restaurants.push(restaurant)
  res.status(201).json(restaurant)
})

router.get('/', (req: Request, res: Response) => {
  res.status(200).send(restaurants)
})

router.get('/:id', (req: Request, res: Response) =>{
  const id = Number(req.params.id)
  const restaurant = restaurants.find(restaurant => restaurant.id === id)
  res.status(200).json(restaurant)
})

router.put('/:id', (req: Request, res: Response) =>{
  const id = Number(req.params.id)
  const restaurant = restaurants.findIndex(restaurant => restaurant.id === id)

  const newRestaurant = {
    id : id,
    name: req.body.nazwa,
    address: req.body.name,
    phone: req.body.telefon,
    nip: req.body.nip,
    email: req.body.email,
    www: req.body.www
  }
  restaurants[restaurant] = newRestaurant
  res.send(restaurant)
})

router.delete('/:id', (req: Request, res: Response) => {
    const restaurant = restaurants.find(r => r.id === +req.params.id)
    const index = restaurants.indexOf(restaurant!, 0)
    restaurants.splice(index, 1)
    res.status(204).json(restaurant)

})

module.exports = router;