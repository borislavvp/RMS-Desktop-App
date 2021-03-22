import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MealsTableComponent } from './components/meals/meals-table/meals-table.component';
import { OrdersPageComponent } from './pages/orders/orders-page/orders-page.component';
import { AddMealPageComponent } from './pages/add-meal-page/add-meal-page.component';
import { UpdateMealPageComponent } from './pages/update-meal-page/update-meal-page.component';
const routes: Routes = [
  {path: 'orders', component: OrdersPageComponent},
  {path: 'meals', component: MealsTableComponent},
  {path: 'addmeal', component: AddMealPageComponent},
  {path: 'updatemeal', component: UpdateMealPageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
