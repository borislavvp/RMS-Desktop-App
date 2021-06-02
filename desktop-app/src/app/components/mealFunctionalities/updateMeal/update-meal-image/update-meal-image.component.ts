import { Component, OnInit } from '@angular/core';
import { BlobService } from '../../../../services/blobservices/blob.service';
@Component({
  selector: 'app-update-meal-image',
  templateUrl: './update-meal-image.component.html',
  styleUrls: ['./update-meal-image.component.scss']
})
export class UpdateMealImageComponent implements OnInit {

  imageUrl = "";
  constructor(private blob:BlobService) { }

  ngOnInit(): void {
    this.getImage("putin-nas-ne-dogoniyat-600x315");
    console.log(this.imageUrl);
  }
  public getImage(name){
    this.blob.getImage(name).subscribe(x=>this.imageUrl=x)
  }

}
