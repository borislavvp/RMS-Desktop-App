import { Guid } from "guid-typescript";
import { Meal } from "./meal.model";

export class Category{
    constructor(public id: Guid, public name: string, public products:Meal[]){}
}
