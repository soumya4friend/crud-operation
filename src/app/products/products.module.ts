import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductsComponent } from './products.component';
import { CreateProductComponent } from './create-product/create-product.component';
import { ViewProductComponent } from './view-product/view-product.component';
import { ViewAllProductsComponent } from './view-all-products/view-all-products.component';
import { DeleteProductComponent } from './delete-product/delete-product.component';
import { ViewAllProductsByDateComponent } from './view-all-products-by-date/view-all-products-by-date.component';
import { ViewAllProductsByCategoryComponent } from './view-all-products-by-category/view-all-products-by-category.component';
import { UpdateProductComponent } from './update-product/update-product.component';
import { FormsModule,NgForm,ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [ProductsComponent, CreateProductComponent, ViewProductComponent, ViewAllProductsComponent, DeleteProductComponent, ViewAllProductsByDateComponent, ViewAllProductsByCategoryComponent, UpdateProductComponent],
  imports: [
    CommonModule,
    ProductsRoutingModule,FormsModule,ReactiveFormsModule
  ]
})
export class ProductsModule { }
