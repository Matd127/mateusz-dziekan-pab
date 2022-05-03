import express from 'express'

const restaurant = require('./Controllers/RestaurantController')
const table = require('./Controllers/TableController')
const app = express()
app.use(express.json())


app.use('/restaurant', restaurant)
app.use('/tables', table)

app.listen(3000)