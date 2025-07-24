import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-loginform',
  templateUrl: './loginform.component.htm',
  styleUrl: './loginform.component.css'
})
export class LoginformComponent {

  user = {
    username: '',
    email: ''
  }

  onSubmit(form: NgForm){
    console.log(form.value)
  }
}
