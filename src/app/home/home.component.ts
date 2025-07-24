import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  title = 'angular-tasks';
  neha: boolean = true;
  tasks: string[] = [];
  neha2 = [{ name: 'Neha' }, { name: 'Adarsh' }, { name: 'Nancy' }];
  newTask = '';

  changeTitle() {
    this.title = 'angular-practice-tasks';
  }
  toggleHideShow() {
    this.neha = !this.neha;
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
}
