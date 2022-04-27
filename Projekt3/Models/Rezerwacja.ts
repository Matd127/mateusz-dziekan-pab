import { Stolik } from "./Stolik";
 
export class Rezerwacja{
    id?: number
    stolik: Stolik[] = []
    start: Date
    koniec: Date
    klient: string
}