import jwt from "jsonwebtoken";

export interface User{
    id?: number
    login: string
    password: string
}