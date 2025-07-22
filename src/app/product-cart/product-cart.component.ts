import { Component, Input } from '@angular/core';
import { Product } from '../product-list/product.model';

@Component({
  selector: 'app-product-cart',
  templateUrl: './product-cart.component.htm',
  styleUrl: './product-cart.component.css'
})
export class ProductCartComponent {
@Input() cartItems: Product[] = []

removeProducts(i:number){
  this.cartItems.splice(i, 1)
}
}
