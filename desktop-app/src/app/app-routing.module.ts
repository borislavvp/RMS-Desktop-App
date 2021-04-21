import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MealsTableComponent } from './components/meals/meals-table/meals-table.component';
import { OrderDetailsPageComponent } from './pages/orders/order-details-page/order-details-page.component';
import { OrdersPageComponent } from './pages/orders/orders-page/orders-page.component';
import { AddMealPageComponent } from './pages/add-meal-page/add-meal-page.component';
import { UpdateMealPageComponent } from './pages/update-meal-page/update-meal-page.component';
import { LoginComponent } from './pages/login/login.component';
import { 
  AuthGuardService as AuthGuard 
} from './services/authentication/auth-guard.service';

const routes: Routes = [
  {path: '', redirectTo: '/login', pathMatch: 'full'},
  {path: 'login', component: LoginComponent},
  {path: 'orders', component: OrdersPageComponent,canActivate: [AuthGuard] },
  {path: 'orders/:id', component: OrderDetailsPageComponent,canActivate: [AuthGuard] },
  {path: 'meals', component: MealsTableComponent,canActivate: [AuthGuard] },
  {path: 'meals/new', component: AddMealPageComponent,canActivate: [AuthGuard] },
  {path: 'meals/:id', component: UpdateMealPageComponent,canActivate: [AuthGuard] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
