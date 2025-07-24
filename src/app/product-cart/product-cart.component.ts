import { Component, Input } from '@angular/core';
import { Product } from '../product-list/product.model';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-product-cart',
  templateUrl: './product-cart.component.htm',
  styleUrl: './product-cart.component.css'
})
export class ProductCartComponent {
@Input() cartItems: Product[] = []

constructor(private cartService: CartService) {}

ngOnInit(){
  this.cartItems = this.cartService.getCart()
}

removeProduct(i: number){
  this.cartService.removeFromCart(i)
}

clearCart(){
  this.cartService.clearCart()
}
}
