import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-orders-page',
  templateUrl: './orders-page.component.html',
  styleUrls: ['./orders-page.component.scss']
})
export class OrdersPageComponent implements OnInit {
  page: number = 1;
  constructor() { }

  ngOnInit(): void {
  }

}
