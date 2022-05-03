import { Table } from "./Table";
 
export class Reservation{
    id?: number
    table: Table
    start: Date
    end: Date
    client: string
}