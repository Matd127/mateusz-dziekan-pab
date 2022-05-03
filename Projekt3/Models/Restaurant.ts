import { Request, Response } from 'express'
export class Restaurant{
    id?: Number
    name: string
    address: string
    phone: string
    nip: string
    email: string
    www: string

    constructor(r: Restaurant){
        this.id = r.id ?? Date.now()
        this.name = r.name
        this.address = r.address
        this.phone = r.phone
        this.nip = r.nip
        this.email = r.email
        this.www = r.www
    }
}


export const validate = (restaurant: Restaurant) => {
    for(var val in restaurant)
        console.log(val)

    return true
}

