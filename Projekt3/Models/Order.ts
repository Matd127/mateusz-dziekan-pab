import { Worker } from "./Worker";
import { Dish } from "./Dish";
import { Table } from "./Table";

export class Order{
    id?: number
    worker: Worker
    dishes?: Dish
    status: string
    table: Table
    price: number
}