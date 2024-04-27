import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './genral/home/home.component';
import { AboutComponent } from './genral/about/about.component';
import { ContactComponent } from './genral/contact/contact.component';
import { ProductsComponent } from './genral/products/products.component';
import { AdminLoginComponent } from './genral/admin-login/admin-login.component';
import { RegisterComponent } from './genral/register/register.component';
import { LoginComponent } from './genral/login/login.component';
import { ProductComponent } from './genral/product/product.component';
import { CartComponent } from './genral/cart/cart.component';
import { CheckoutComponent } from './genral/checkout/checkout.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'about',
    component: AboutComponent,
  },
  {
    path: 'contact',
    component: ContactComponent,
  },
  { path: 'products/:categoryid', component: ProductsComponent },
  { path: 'product/:id', component: ProductComponent },
  {
    path: 'adminlogin',
    component: AdminLoginComponent,
  },
  {
    path: 'register',
    component: RegisterComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'cart',
    component: CartComponent,
  },
  {
    path: 'checkout',
    component: CheckoutComponent,
  },
  //lazy loading
  {
    path: 'admin',
    loadChildren: () =>
      import('./admin/admin.module').then((m) => m.AdminModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
