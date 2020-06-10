import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ProductsComponent } from './components/products/products.component';
import { LoginComponent } from './components/login/login.component';
import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';
import { MyOrdersComponent } from './components/my-orders/my-orders.component';
import { CheckOutComponent } from './components/check-out/check-out.component';
import { AuthService } from './auth.service';
import { AuthGuard } from './auth-guard.service';


const routes: Routes = [
  {path:"", pathMatch:"full", component: HomeComponent},
  {path:"products", component: ProductsComponent},
  {path:"login", component: LoginComponent},
  {path:"shopping-cart", component: ShoppingCartComponent},

  {path:"my-orders", component: MyOrdersComponent, canActivate: [AuthGuard]},
  {path:"check-out", component: CheckOutComponent, canActivate: [AuthGuard]},
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthService, AuthGuard]
})
export class AppRoutingModule { }
