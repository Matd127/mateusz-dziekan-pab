import {Note} from "./Note"
import {Tag} from "./Tag"
import {User} from "./User"

export class All{
    notes: Note[] = [
        {id: 33, title:"Hej", content:"Bida"}
    ]
    tags: Tag[] = []
    users: User[] = [
    { id: 12, login: 'czlowiek', password: '123456'},
    { id: 13, login: 'ktos', password: 'nikt'}]
}