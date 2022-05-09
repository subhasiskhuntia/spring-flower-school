import { Injectable } from '@angular/core';
import { Users } from './users';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class LoginService {
  users:Users[]=[];
  constructor(private http:HttpClient) { }
  UsersList():Observable<Users[]>{
    return this.http.get<Users[]>("http://localhost:3000/Users")
  }
}
