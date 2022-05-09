import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { SigninService } from '../signin.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  signinForm:FormGroup=new FormGroup({
    id:new FormControl(),
    name:new FormControl(),
    password:new FormControl(),
    motherName:new FormControl(),
    phone:new FormControl(),
    address:new FormControl()
  })
  constructor(private service:SigninService) { }

  ngOnInit(): void {
  }
  saveUser(){
    // console.log(this.signinForm);
    this.service.saveUser(this.signinForm.value)
  }


}
