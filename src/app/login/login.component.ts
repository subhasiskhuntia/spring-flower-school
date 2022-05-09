import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { LoginService } from '../login.service';
import { UserProfileService } from '../user-profile.service';
import { Users } from '../users';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  userList:Users[]=[];
  msg:string="";
  color:boolean=false;

  constructor(public loginService:LoginService,private userProfileService:UserProfileService) {
    console.log("inside login component");
    
   }

  ngOnInit(): void {
  }

  fetchData(LoginRef:NgForm){
    this.loginService.UsersList().subscribe(result=>this.userList=result,error=>console.log(error),()=>{
      console.log(this.userList);
      this.login(LoginRef)
    });
  }
  login(loginRefMain:NgForm){
    let loginRef=loginRefMain.value;
    console.log(loginRef.userName);
    console.log(loginRef.password);
    if(this.userList.length==0){
    this.fetchData(loginRefMain);
    }
    
    console.log(this.userList);
    let flag=0;
    for( let user of this.userList){
        console.log(user.Name,user.Password);
        
        if(user.Name==loginRef.userName && user.Password==loginRef.password){
          this.msg="logged in successfully"
          console.log("login successfully");
          this.userProfileService.user=user;
          this.userProfileService.userName=user.Name;
          this.color=true;
          flag=1;
          
        }
      }
    if(flag==0){
      console.log(this.color);
      
      this.color=false;
      this.msg="Invalid Credential"
    }
  }

}
