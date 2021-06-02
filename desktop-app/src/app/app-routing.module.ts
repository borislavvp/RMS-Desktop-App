import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MealsTableComponent } from './components/meals/meals-table/meals-table.component';
import { OrderDetailsPageComponent } from './pages/orders/order-details-page/order-details-page.component';
import { OrdersPageComponent } from './pages/orders/orders-page/orders-page.component';
import { AddMealPageComponent } from './pages/add-meal-page/add-meal-page.component';
import { UpdateMealPageComponent } from './pages/update-meal-page/update-meal-page.component';
import { LoginComponent } from './pages/auth/login/login.component';
import { LoginRedirectComponent } from './pages/auth/login-redirect/login-redirect.component';
import { LogoutRedirectComponent } from './pages/auth/logout-redirect/logout-redirect.component';
import { 
  AuthGuardService as AuthGuard 
} from './services/authentication/auth-guard.service';

const routes: Routes = [
  {path: '', redirectTo: '/login', pathMatch: 'full'},
  {path: 'login', component: LoginComponent},
  {path: 'signin-oidc', component: LoginRedirectComponent},
  {path: 'signout-callback-oidc', component: LogoutRedirectComponent},
  {path: 'orders', component: OrdersPageComponent ,canActivate: [AuthGuard] },
  {path: 'orders/:id', component: OrderDetailsPageComponent,canActivate: [AuthGuard] },
  {path: 'meals', component: MealsTableComponent},
  {path: 'meals/new', component: AddMealPageComponent},
  {path: 'meals/:id', component: UpdateMealPageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
