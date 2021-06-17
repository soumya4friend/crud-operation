import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from './product';
import { Category } from '../site-framework/category';



@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor( private httpClient:HttpClient) { }

  getAllProducts():Observable<Product>{
    const productUrl = 'http://localhost:3000/products';

    return this.httpClient.get<Product>(productUrl); //return an observable

  }

  getCtegories(): Observable<Category>{
    const categoriesUrl = 'http://localhost:3000/categories';

    return this.httpClient.get<Category>(categoriesUrl); //return an observable

  }

  // methods should return datatype(observable) and what type i.e Product
  createProduct(productBody): Observable<Product> {
    const productUrl = 'http://localhost:3000/products';

    //i'm expecting 'Product' to be return..
    return this.httpClient.post<Product>(productUrl,productBody); //return an observable
  }

  viewProduct(productId): Observable<Product> {
    const productUrl = 'http://localhost:3000/products/'+productId;
    return this.httpClient.get<Product>(productUrl);
  }

  updateProduct(productId,productBody): Observable<Product> {
    const productUrl = 'http://localhost:3000/products/'+productId;
    return this.httpClient.put<Product>(productUrl,productBody);
  }

  deleteProduct(productId): Observable<Product> {
    const productUrl = 'http://localhost:3000/products/'+productId;
    return this.httpClient.delete<Product>(productUrl);
  }

  searchCategoryProducts(categoryId): Observable<Product> {
    const productUrl = 'http://localhost:3000/products?categoryId='+categoryId;
    return this.httpClient.get<Product>(productUrl);
  }

  searchDateProducts(dateParam): Observable<Product> {
    const productUrl = 'http://localhost:3000/products/date='+dateParam;
    return this.httpClient.get<Product>(productUrl);
  }

}
