import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SideBarComponent } from './components/shared/side-bar/side-bar.component';
import { OrdersTableComponent } from './components/orders/orders-table/orders-table.component';
import { MealsTableComponent } from './components/meals/meals-table/meals-table.component';
import { BaseDropdownComponent } from './components/shared/dropdown/base-dropdown.component';
import { OrderStatusComponent } from './components/orders/order-status/order-status.component';
import { OrderHeaderComponent } from './components/orders/order-header/order-header.component';
import { OrdersPageComponent } from './pages/orders/orders-page/orders-page.component';
import { DropdownMenuDirective } from './directives/dropdown-menu-directive.directive';
import { DropdownMenuOriginDirective } from './directives/dropdown-menu-origin.directive';
import { OrderOptionsComponent } from './components/orders/order-options/order-options.component';
import { NgxPaginationModule } from 'ngx-pagination';

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
    DropdownMenuDirective,
    DropdownMenuOriginDirective,
    OrderOptionsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxPaginationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
