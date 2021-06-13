import { Component, OnInit } from '@angular/core';
import {BlobService} from '../../../../services/blobservices/blob.service';
import {Meal} from '../../../../models/meal.model';
import { Guid } from 'guid-typescript';
import { Category } from 'src/app/models/category.model';
import {ProductService} from '../../../../services/productservice/product.service';
import {CategoryService} from '../../../../services/categoryservice/category.service';
@Component({
  selector: 'app-add-meal-form',
  templateUrl: './add-meal-form.component.html',
  styleUrls: ['./add-meal-form.component.scss']
})
export class AddMealFormComponent implements OnInit {

  chosenCategory:string ;
  imgUrl:string;
  file:any;
  filename = '';
  imageSource:string = '';
  formData:FormData;
  formDataMeal: FormData;
  categories: Category[];
  constructor(private blobServ: BlobService,private prodServ: ProductService,private catServ: CategoryService) {

   }
  newMeal:Meal;
  ngOnInit(): void {
    this.categories = [];
    this.catServ.getAll().subscribe(x=>this.categories=x);
  }
  getMealInput(name,price,desc,prods){
    this.formData = new FormData();
    var category:Category;
    if(this.file!=null){
      
      this.formData.append(this.file[0].name, this.file[0]);
    }
    this.formDataMeal = new FormData();
    var id = Guid.create();
    console.log(id);
    this.categories.forEach(x=>{
      if(x.name = this.chosenCategory){
        category = x;
      }
    })
    var temp = new Meal(id,name,prods,desc,price,1,this.file[0].name,category.id,category);
    for ( var key in temp ) {
      console.log(key+"  "+temp[key]);
      this.formDataMeal.append(key, temp[key]);
    };

    this.blobServ.UploadImage(this.formData);
    this.prodServ.Insert(this.formDataMeal);
    this.setImage(temp.image);

  }
  get Category() {
    return this.chosenCategory ? this.chosenCategory : "Category"
  }
  setCategory(cat){
    this.chosenCategory = cat;
  }
  setFilename(files) {
    if (files[0]) {
      this.file = files;
      this.filename = files[0].name;
    }
  }
  setImage(prod){
    this.blobServ.getImage(prod).subscribe(x=>{
      this.imgUrl = x;
      console.log(x);
    })
  }
}
