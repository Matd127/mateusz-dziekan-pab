import express from 'express'
import {Request, Response} from 'express'
import {Note} from './Note'
import {Tag} from './Tag'
import {User} from './User'
import fs from 'fs';
import jwt from "jsonwebtoken";

const app = express()
app.use(express.json())

//LOGOWANIE

app.post('/login', (req: Request, res: Response) =>{
  
})

//Deklaracja
const notes: Note[] = []
const tags: Tag[] = []
const users: User[] = []
 
async function readStorage(): Promise<void> {
    try {
        const data = await fs.promises.readFile('./storeFile.json', 'utf-8');
    } catch (err) {
        console.log(err)
    }
}

async function updateStorage(data:Note): Promise<void> {
  try {
      await fs.promises.writeFile('./storeFile.json', JSON.stringify(data));
  } catch (err) {
      console.log(err)
  }
}

//Wyswietlanie
app.get('/note/:id', async function(req: Request, res: Response){
  await readStorage();
  const note = notes.find(n => n.id === +req.params.id)
  console.log(+req.params.id)
  if(note == undefined ) res.status(404).send('Note does not exist')
  else res.status(200).json(note)
})


//DODAWANIE
app.post('/note', async function(req: Request, res: Response){
  await readStorage()
  const note: Note = req.body
  if(note.title == undefined) res.status(400).send('Note title is undefined')
  if(note.content == undefined) res.status(400).send('Note content is undefined')
  note.id = Date.now()
  notes.push(note)
  res.status(201).send(note)
  await updateStorage(note)
})

//EDYCJA
app.put('/note/:id', async function(req: Request, res: Response){
  const id = Number(req.params.id)
  const note = notes.findIndex(note => note.id === id)
  if(note == undefined ) res.status(404).send('Note does not exist')

  const updatedNote = {
    title: req.body.title,
    content: req.body.content,
    id: req.body.id
  }

  if(updatedNote == undefined) res.status(404).send('Note does not exist')
  if(updatedNote.title == undefined) res.status(404).send('Note title is undefined')
  if(updatedNote.content == undefined) res.status(404).send('Note content is undefined')
  notes[note] = updatedNote
  res.send().status(204)
  await updateStorage(updatedNote)
})

//USUWANIE
app.delete('/note/:id', async function (req: Request, res: Response){
  const note = notes.find(n => n.id === req.body.id)
  if(note === undefined) {
      res.status(400).send('Note does not exist')
  }
  else {
      notes.splice(req.body.id, 1)
      res.status(204).send(note)
      await updateStorage(note);
  }
})

//POBIERANIE LISTY NOTATEK
app.get('/notes', async function(req: Request, res: Response){
  if(notes == undefined) res.status(400)
  await readStorage();
  res.status(200).send(notes)
  
 })


 //DODAWANIE TAGOW
app.post('/tag', function(req: Request, res: Response){
  const tag = req.body
  tag.name = tag.name.toLowerCase()
  const name = req.body.name.toLowerCase()
  if(tag.name == undefined) res.status(400).send('Tag name is undefined')

  const exists = tags.find(tag => tag.name === name)
  if(exists) res.status(404).send("Tag exists.")

  tag.id = Date.now()
  tags.push(tag)
  res.status(201).send(tag)
})

//Wyswietlanie TAGOW
app.get('/tag/:id', function(req: Request, res: Response){
  const id = Number(req.params.id)
  const tag = tags.find(tag => tag.id === id)
  if(tag == undefined ) res.status(404).send('Note does not exist')
  res.status(200).json(tag)
})

//POBIERANIE LISTY TAGOW
app.get('/tags', function(req: Request, res: Response){
  if(tags == undefined) res.status(400)
     res.status(200).send(tags)
 })

 //EDYCJA TAGOW
 app.put('/tag/:id', function(req: Request, res: Response){
  const id = Number(req.params.id)
  const tag = tags.findIndex(tag => tag.id === id)
  if(tag == undefined ) res.status(404).send('Note does not exist')

  const updatedTag = {
    name: req.body.name,
  }

  if(updatedTag == undefined) res.status(404).send('Note does not exist')
  if(updatedTag.name == undefined) res.status(404).send('Note title is undefined')
  tags[tag] = updatedTag
  res.send().status(204)
})


 //USUWANIE TAGOW
app.delete('/tag/:id', async function(req: Request, res: Response){
  const id = Number(req.params.id)
  const tag = tags.findIndex(tag => tag.id === id)
  if(tag == undefined ) res.status(400).send('Note does not exist')
  tags.splice(tag, 1)
  res.send().status(204)
})

app.get('/', function (req: Request, res: Response) {
  res.send('GET Hello World')
})
app.post('/', function (req: Request, res: Response) {
  console.log(req.body) // e.x. req.body.title
  res.status(200).send('POST Hello World')
})

app.listen(3000)