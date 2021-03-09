import { Injectable } from '@angular/core';
import {  HttpClient } from '@angular/common/http';
import { Price } from '../models/price';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  items = [];

  constructor(
    private http: HttpClient) { }

    addToCart(product) {
    this.items.push(product);
    console.log(this.items);
    let total=0;
    this.items.forEach(item =>total+=item.price);
    console.log(total);
    /*forma copmpatta
    this.items.foreEach(function(items){
      total+=item.price
    });
    */

  }

  getItems() {
    return this.items;
  }

  clearCart() {
    this.items = [];
    return this.items;
  }
  getShippingPrices() {
    return this.http.get<Price[]>('/assets/shipping.json');
  }

}
