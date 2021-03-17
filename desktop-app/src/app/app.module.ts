import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SideBarComponent } from './shared/side-bar/side-bar.component';
import { OrdersTableComponent } from './orders/orders-table/orders-table.component';
import { MealsTableComponent } from './meals/meals-table/meals-table.component';

@NgModule({
  declarations: [
    AppComponent,
    SideBarComponent,
    OrdersTableComponent,
    MealsTableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
