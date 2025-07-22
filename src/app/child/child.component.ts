import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.htm',
  styleUrl: './child.component.css'
})
export class ChildComponent {
  @Input() message!: string
}
