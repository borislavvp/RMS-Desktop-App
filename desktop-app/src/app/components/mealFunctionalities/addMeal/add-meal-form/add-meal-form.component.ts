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
    this.catServ.getAll().subscribe(x=>this.categories=x);
  }
  getMealInput(name,price,category,desc,prods){
    this.formData = new FormData();
    if(this.file!=null){
      
      this.formData.append(this.file[0].name, this.file[0]);
    }
    this.formDataMeal = new FormData();
    var id = Guid.create();
    console.log(id);
    //var _cat = this.categories.find(x=>x.name==category);
    var temp = new Meal(id,name,prods,desc,price,1,this.file[0].name,this.categories[0].id,this.categories[0]);
    for ( var key in temp ) {
      console.log(key+"  "+temp[key]);
      this.formDataMeal.append(key, temp[key]);
    };
    console.log(temp.name);
    console.log(this.file[0].name);
    console.log(this.formDataMeal);
    //this.blobServ.UploadImage(this.formData);
    this.prodServ.Insert(this.formDataMeal);


  }

  setFilename(files) {
    if (files[0]) {
      this.file = files;
      this.filename = files[0].name;
    }
  }
}
