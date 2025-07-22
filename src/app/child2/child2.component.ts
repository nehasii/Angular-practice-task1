import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-child2',
  templateUrl: './child2.component.htm',
  styleUrl: './child2.component.css'
})
export class Child2Component {
 @Output() messageEvent = new EventEmitter<string>()

 sendMessage(){
  this.messageEvent.emit('Hello from Child')
 }
}
