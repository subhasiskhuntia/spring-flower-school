import { Injectable } from '@angular/core';
import { Users } from './users';

@Injectable({
  providedIn: 'root'
})
export class UserProfileService {
  user!:Users;
  userName:string="User";
  constructor() { }
}
