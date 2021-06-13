import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Guid } from 'guid-typescript';
import { BlobService } from 'src/app/services/blobservices/blob.service';
import { Category } from 'src/app/models/category.model';
import { Meal } from 'src/app/models/meal.model';
import { CategoryService } from 'src/app/services/categoryservice/category.service';
import { ProductService } from 'src/app/services/productservice/product.service';

@Component({
  selector: 'app-update-meal-form',
  templateUrl: './update-meal-form.component.html',
  styleUrls: ['./update-meal-form.component.scss']
})
export class UpdateMealFormComponent implements OnInit {
  mealId: Guid;
  chosenCategory:string;
  file:any;
  filename = '';
  imageSource:string = '';
  formData:FormData;
  formDataMeal: FormData;
  categories: Category[];
  products:Meal[];
  imgUrl: string;
  constructor(
    private route: ActivatedRoute,private blobServ: BlobService,private prodServ: ProductService,private catServ: CategoryService) { }

  ngOnInit(): void {
    this.categories = [];
    this.products = [];
    this.catServ.getAll().subscribe(x=>this.categories=x);
    this.prodServ.getAll().subscribe(x=>this.products = x);
    this.products.forEach(x=>{
      if(x.id == this.mealId){
        console.log(x.name + "   IMage " +x.image );
      }
    });
     //this.route.params
      //.subscribe(
      //  async (params: Params) => {
      //    
       //     this.mealId = +params['id'];
      //    }
     // );
      this.mealId=Guid.parse(this.route.snapshot.paramMap.get("id"));
      
  }
  setCategory(cat){
    console.log(cat);
    this.chosenCategory = cat;
  }
  setFilename(files) {
    if (files[0]) {
      this.file = files;
      this.filename = files[0].name;
    }
  }

  getMealInput(name,price,desc,prods){
    this.formData = new FormData();
    this.formDataMeal = new FormData();
    var category:Category;
    var currProd:Meal;
    this.products.forEach(x=>{
      if(x.id == this.mealId){
        currProd = x;
      }
    });
    var changedProd:Meal = new Meal(this.mealId,"default","default","default",-1,999,"default",Guid.parse("bd5739f1-f1f8-4d2b-97a2-bda5c3119fe3"),null);
    
    if(this.file!=null){
      
      this.formData.append(this.file[0].name, this.file[0]);
      changedProd.image = this.file[0].name;
      
      this.blobServ.DeleteImage(currProd.image);
      this.blobServ.UploadImage(this.formData);
      currProd.image = this.file[0].name;
    }
    
    if(name!=""){
      changedProd.name = name;
      currProd.name = name;
    }
    if(price!=""){
      changedProd.price = price;
      currProd.price = price;
    }
    if(desc!=""){
      changedProd.description = desc;
      currProd.description = desc;
    }
    if(prods!=""){
      changedProd.ingredients = prods;
      currProd.ingredients = prods;
    }
    if(this.chosenCategory!=null){
      this.categories.forEach(x=>{
        if(x.name = this.chosenCategory){
          category = x;
        }
      });
      changedProd.category = category;
      changedProd.categoryId = category.id;
      currProd.categoryId = category.id;
      currProd.category = category;
    }
    for ( var key in changedProd ) {
      console.log(key+"  "+changedProd[key]);
      this.formDataMeal.append(key, changedProd[key]);
    };
    this.prodServ.Update(this.formDataMeal);
    this.setImage(changedProd.image);

  }
  setImage(prod){
    this.blobServ.getImage(prod).subscribe(x=>{
      this.imgUrl = x;
      console.log(x);
    })
  }
}
