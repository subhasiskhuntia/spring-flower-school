import { EventEmitter, Injectable, Output } from '@angular/core';
import { Users } from './users';

@Injectable({
  providedIn: 'root'
})
export class UserProfileService {
  user!:Users;
  userName:string="User";
  @Output() fire: EventEmitter<any> = new EventEmitter();
  constructor() { }
  change() {
    console.log('change started'); 
     this.fire.emit(this.userName);
   }

   getEmittedValue() {
     return this.fire;
   }
}
