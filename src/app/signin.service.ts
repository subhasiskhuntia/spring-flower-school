import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Users } from './users';

@Injectable({
  providedIn: 'root'
})
export class SigninService {

  constructor(private http:HttpClient) { }
  saveUser(tempUser:any){
    console.log(tempUser);
    let user=new Users(tempUser.id,tempUser.name,tempUser.password,tempUser.phone,tempUser.address,tempUser.mothersName)
    this.http.post("http://localhost:3000/Users",user).subscribe(result=>console.log(result),error=>console.log(error),()=>console.log("done"))
  }
}
