import { Component } from '@angular/core';
import { Product } from './product-list/product.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.htm',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-tasks';
  neha:boolean=true;
  tasks: string[] = [];
  cart: Product[] = []
neha2=[{name:'Neha'},{name:'Adarsh'}, {name:'Nancy'}]
newTask = ''

  changeTitle(){
    this.title = 'angular-practice-tasks'
  }
  toggleHideShow(){
    this.neha = !this.neha
  }

  addTask(){
    let task = this.newTask
    if(task){
      this.tasks.push(task)
      this.newTask = ''
    }
  }

  removeTask(i:number){
    this.tasks.splice(i, 1)
  }

  childMessage = ''
  receiveMessage(message: string){
    this.childMessage = message
  }

  handleAddToCart(product: Product){
    this.cart.push(product)
  }
}
