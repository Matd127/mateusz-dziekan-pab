import { Tag } from "./Tag";

export interface Note{
    title:string;
    content:string;
    createDate?:string;
    tags?:Tag[];
    id?:number;
  }
  