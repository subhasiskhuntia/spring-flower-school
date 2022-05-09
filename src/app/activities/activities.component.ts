import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
// import { stringify } from 'querystring';
// import { Interface } from 'readline';

@Component({
  selector: 'app-activities',
  templateUrl: './activities.component.html',
  styleUrls: ['./activities.component.css']
})
export class ActivitiesComponent implements OnInit {
  activities:Activity[]=[];
  constructor(private http:HttpClient) { }

  ngOnInit(): void {
    this.http.get("http://localhost:3000/activities").subscribe(result=>this.activities=JSON.parse(JSON.stringify(result)),(error)=>console.log(error),()=>console.log("done"))
  }
  fetchActivity(){

  }

}
interface Activity{
  id:number;
  activity:string;
  subject:string;
}
