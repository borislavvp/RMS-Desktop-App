import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MealsTableComponent } from './components/meals/meals-table/meals-table.component';
import { OrdersPageComponent } from './pages/orders/orders-page/orders-page.component';

const routes: Routes = [
  {path: 'orders', component: OrdersPageComponent},
  {path: 'meals', component: MealsTableComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
