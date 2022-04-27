import { Pracownik } from "./Pracownik";
import { Danie } from "./Danie";
import { Stolik } from "./Stolik";

export class Zamowienie{
    id?: number
    pracownik: Pracownik[] = []
    pozycje: Danie[] = []
    status: string
    stolik: Stolik[] = []
    kwota: number
}