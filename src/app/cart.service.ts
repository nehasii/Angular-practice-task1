import { Injectable } from '@angular/core';
import { Product } from './product-list/product.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cart: Product[] = []
  constructor() { }

  getCart(){
    return this.cart
  }

  addToCart(product: Product){
    this.cart.push(product)
  }

  removeFromCart(i: number){
    this.cart.splice(i, 1)
  }

  clearCart(){
    this.cart.length = 0
  }
}
