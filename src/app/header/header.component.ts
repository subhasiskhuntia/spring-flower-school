import { Component, OnInit } from '@angular/core';
import { UserProfileService } from '../user-profile.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  private service:UserProfileService=new UserProfileService();
  userName:any="User";
  constructor(){
    this.service.userName=this.service.userName;
    console.log("username from app",this.userName);
    console.log("inside header");
    if(sessionStorage.getItem("user") !=null && sessionStorage.getItem('user')!=undefined){
      this.userName=sessionStorage.getItem("user");
      // sessionStorage.removeItem("user")
    }
  }

  ngOnInit(): void {
  }

}
