import { Component, EventEmitter, Output } from '@angular/core';
import { Product } from './product.model';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.htm',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {
@Output() addToCart = new EventEmitter<Product>()

products: Product[] = [
    { id: 1, name: 'Tripod', price: 3200 },
    { id: 2, name: 'IPhone 16 pro', price: 120000 },
    { id: 3, name: 'Wired earphones - USB C', price: 1500 },
]

add(product: Product){
  this.addToCart.emit(product)
}
}
