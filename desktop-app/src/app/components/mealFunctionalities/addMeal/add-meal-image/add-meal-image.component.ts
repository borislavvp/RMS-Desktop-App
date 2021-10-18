import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-meal-image',
  templateUrl: './add-meal-image.component.html',
  styleUrls: ['./add-meal-image.component.scss']
})
export class AddMealImageComponent implements OnInit {

  constructor() { }
  file:any;
  filename = '';
  imageSource:string = '';
  formData:FormData;
  ngOnInit(): void {
  }

  setFilename(files) {
    if (files[0]) {
      this.file = files;
      this.filename = files[0].name;
      console.log(this.filename);
    }
  }
  getFile(){
    this.formData = new FormData();
    if(this.file[0]){
      this.formData.append(this.file[0].name, this.file[0]);
    }
    return this.formData;
  }
  //(click)="save(fileInput.files)

}
