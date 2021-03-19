import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SideBarComponent } from './components/shared/side-bar/side-bar.component';
import { OrdersTableComponent } from './components/orders/orders-table/orders-table.component';
import { MealsTableComponent } from './components/meals/meals-table/meals-table.component';
import { BaseDropdownComponent } from './components/shared/dropdown/base-dropdown/base-dropdown.component';
import { OrderStatusComponent } from './components/orders/order-status/order-status.component';
import { OrderHeaderComponent } from './components/orders/order-header/order-header.component';
import { OrdersPageComponent } from './pages/orders/orders-page/orders-page.component';

@NgModule({
  declarations: [
    AppComponent,
    SideBarComponent,
    OrdersTableComponent,
    MealsTableComponent,
    BaseDropdownComponent,
    OrderStatusComponent,
    OrderHeaderComponent,
    OrdersPageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
