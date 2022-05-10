import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
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

  constructor(public loginService:LoginService,private userProfileService:UserProfileService,private route:Router) {
    console.log("inside login component");
    sessionStorage.removeItem("user");
    
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
    sessionStorage.removeItem('user');
    let loginRef=loginRefMain.value;
    console.log(loginRef.userName,"Entered Username");
    console.log(loginRef.password,"Entered password");
    if(this.userList.length==0){
    this.fetchData(loginRefMain);
    }
    
    console.log(this.userList);
    let flag=0;
    for( let user of this.userList){
        // console.log(user.Name,user.Password);
        // console.log(user.Name,user.Password," user detail");
        
        // console.log(user.Name==loginRef.userName," First one");
        // console.log(user.Password==loginRef.password," second one");
        
        if(user.Name==loginRef.userName && user.Password==loginRef.password){
          // console.log(user.Name,user.Password);
          
          this.msg="logged in successfully"
          console.log("login successfully");
          this.userProfileService.user=user;
          this.userProfileService.userName=user.Name;
          this.color=true;
          sessionStorage.setItem("user",user.Name);
          console.log(sessionStorage.getItem("user"));
          
          flag=1;
          setTimeout(()=>
          
          this.route.navigate(["/"]),2000
          )
          break;
          
        }
      }
    if(flag==0){
      // console.log(this.color);
      
      this.color=false;
      this.msg="Invalid Credential"
    }
  }

}
