import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ProductsComponent } from './components/products/products.component';
import { LoginComponent } from './components/login/login.component';
import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';
import { MyOrdersComponent } from './components/my-orders/my-orders.component';
import { CheckOutComponent } from './components/check-out/check-out.component';


const routes: Routes = [
  {path:"", pathMatch:"full", component: HomeComponent},
  {path:"products", component: ProductsComponent},
  {path:"login", component: LoginComponent},
  {path:"shopping-cart", component: ShoppingCartComponent},

  {path:"my-orders", component: MyOrdersComponent},
  {path:"check-out", component: CheckOutComponent},
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
