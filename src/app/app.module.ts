import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {OrdersModule} from './orders/orders.module';
import { SiteFrameworkModule } from './site-framework/site-framework.module';
import { HttpClientModule } from '@angular/common/http'
import { FormsModule } from '@angular/forms';
import { ProductsModule } from './products/products.module';
import { HomeComponent } from './home/home.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    OrdersModule,
    SiteFrameworkModule,
    HttpClientModule,
    FormsModule,

  ],

  providers: [],
  bootstrap: [AppComponent,]
})
export class AppModule { }
