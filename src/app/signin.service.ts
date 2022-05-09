import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Users } from './users';

@Injectable({
  providedIn: 'root'
})
export class SigninService {

  constructor(private http:HttpClient) { }
  saveUser(user:Users){
    console.log(user);
    this.http.post("http://localhost:3000/Users",user).subscribe(result=>console.log(result),error=>console.log(error),()=>console.log("done"))
  }
}
