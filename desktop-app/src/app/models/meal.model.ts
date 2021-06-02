import { Guid } from "guid-typescript";
import { Category } from "./category.model";

export class Meal{
    constructor(public id: Guid, public name: string,public ingredients: string, public description: string,public price:number,public availability:number,public image: string, public categoryId:Guid, public category:Category){}
}
