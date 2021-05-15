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
import { OrderDetailsPageComponent } from './pages/orders/order-details-page/order-details-page.component';
import { AddMealPageComponent } from './pages/add-meal-page/add-meal-page.component';
import { UpdateMealPageComponent } from './pages/update-meal-page/update-meal-page.component';
import { AddMealFormComponent } from './components/mealFunctionalities/addMeal/add-meal-form/add-meal-form.component';
import { AddMealImageComponent } from './components/mealFunctionalities/addMeal/add-meal-image/add-meal-image.component';
import { UpdateMealFormComponent } from './components/mealFunctionalities/updateMeal/update-meal-form/update-meal-form.component';
import { UpdateMealImageComponent } from './components/mealFunctionalities/updateMeal/update-meal-image/update-meal-image.component';
import { MealOptionsComponent } from './components/meals/meal-options/meal-options.component';
import { OrderMealsTableComponent } from './components/orders/order-details/order-meals-table/order-meals-table.component';
import { OrderOverviewComponent } from './components/orders/order-details/order-overview/order-overview.component';
import { LoginComponent } from './pages/auth/login/login.component';
import { LoginRedirectComponent } from './pages/auth/login-redirect/login-redirect.component';
import { LogoutRedirectComponent } from './pages/auth/logout-redirect/logout-redirect.component';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { HttpClientModule } from '@angular/common/http';

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
    OrderDetailsPageComponent,
    AddMealPageComponent,
    UpdateMealPageComponent,
    AddMealFormComponent,
    AddMealImageComponent,
    UpdateMealFormComponent,
    UpdateMealImageComponent,
    MealOptionsComponent,
    OrderMealsTableComponent,
    OrderOverviewComponent,
    LoginComponent,
    LoginRedirectComponent,
    LogoutRedirectComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxPaginationModule,
    FormsModule,
    BrowserAnimationsModule, 
    ToastrModule.forRoot(),
    HttpClientModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
