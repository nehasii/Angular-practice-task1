import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  loginMsg(message: string){
    console.log('LoginService:', message)
  }
  constructor() { }
}
