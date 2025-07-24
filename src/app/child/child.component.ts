import { Component, EventEmitter, Input, Output } from '@angular/core';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.htm',
  styleUrl: './child.component.css'
})
export class ChildComponent {
  @Input() message!: string

  constructor(private logger: LoginService){

  }
  logMessage(){
    this.logger.loginMsg('Button clicked!')
  }
}
