import {Request, Response} from 'express'
import { Table } from '../Models/Table'
import express from 'express';

const router = express.Router();
const app = express()
app.use(express.json())

const tables: Table[] = []


//Dodawanie stolika
router.post('/add', (req: Request, res: Response) => {
    const table: Table = req.body
    table.id = Date.now();
    tables.push(table)
  
    console.log(table)
    res.status(201).json(table)
  })

module.exports = router;