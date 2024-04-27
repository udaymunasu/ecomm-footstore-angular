import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './genral/header/header.component';
import { FooterComponent } from './genral/footer/footer.component';
import { HomeComponent } from './genral/home/home.component';
import { ContactComponent } from './genral/contact/contact.component';
import { AboutComponent } from './genral/about/about.component';
import { ProductsComponent } from './genral/products/products.component';
import { AdminLoginComponent } from './genral/admin-login/admin-login.component';
import { LoginComponent } from './genral/login/login.component';
import { RegisterComponent } from './genral/register/register.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ApiService } from './api.service';
import { AdminModule } from './admin/admin.module';
import { ProductComponent } from './genral/product/product.component';
import { CartComponent } from './genral/cart/cart.component';
import { CheckoutComponent } from './genral/checkout/checkout.component';
import { OrdersuccessComponent } from './genral/ordersuccess/ordersuccess.component';
import { ImageSliderComponent } from './components/image-slider/image-slider.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    ProductsComponent,
    AdminLoginComponent,
    LoginComponent,
    RegisterComponent,
    ProductComponent,
    CartComponent,
    CheckoutComponent,
    OrdersuccessComponent,
    ImageSliderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule, ReactiveFormsModule, FormsModule,
    AdminModule

  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
