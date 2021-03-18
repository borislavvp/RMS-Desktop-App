import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MealsTableComponent } from './meals/meals-table/meals-table.component';
import { OrdersTableComponent } from './orders/orders-table/orders-table.component';

const routes: Routes = [
  {path: 'orders', component: OrdersTableComponent},
  {path: 'meals', component: MealsTableComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
