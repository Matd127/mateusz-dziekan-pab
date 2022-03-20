import express from 'express'
import {Request, Response} from 'express'

const app = express()
app.use(express.json())

export interface Note{
  title:string;
  content:string;
  createDate?:string;
  tags?:string[];
  id?:number;
}
const notes: Note[]= [
  {
    title: "Notka1",
    content : "Przykladowa notatka",
    id:54
  }
]

//DODAWANIE
app.post('/note', function(req: Request, res: Response){
  // const note = JSON.stringify(notes)
  const note = req.body

  if(note.title == undefined) res.status(400).send('Note title is undefined')
  if(note.content == undefined) res.status(400).send('Note content is undefined')
  const noteId = Date.now()
  const noteWithId = {...note, id: noteId}
  notes.push(noteWithId)

  res.status(201).send(`${noteId}`)
})

//WYŚWIETLANIE
app.get('/note/:id', function(req: Request, res: Response){

    const id = Number(req.params.id)
    const note = notes.find(note => note.id === id)
    if(note == undefined ) res.status(404).send('Note does not exist')
    res.status(200).json(note)
})
//EDYCJA
app.put('/note/:id', function(req: Request, res: Response){
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
    res.status(204)
})
//USUWANIE
app.delete('/note/:id', function(req: Request, res: Response){
    const id = Number(req.params.id)
    const note = notes.findIndex(note => note.id === id)
    if(note == undefined ) res.status(400).send('Note does not exist')

    notes.splice(note, 1)
    res.status(204)
})


 app.get('/note', function(req: Request, res: Response){
     res.send(notes)
 })
app.get('/', function (req: Request, res: Response) {
  res.send('GET Hello World')
})
app.post('/', function (req: Request, res: Response) {
  console.log(req.body) // e.x. req.body.title
  res.status(200).send('POST Hello World')
})

app.listen(3000)