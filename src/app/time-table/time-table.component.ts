import { Component, OnInit } from '@angular/core';
import data from '../timetable.json'
@Component({
  selector: 'app-time-table',
  templateUrl: './time-table.component.html',
  styleUrls: ['./time-table.component.css']
})
export class TimeTableComponent implements OnInit {

  timeTableData:TimeTable[]=JSON.parse(JSON.stringify(data.TimeTable));
  constructor() { }

  ngOnInit(): void {
  }
  display(){
    console.log(this.timeTableData);
    console.log(this.timeTableData[0].id);
    console.log(this.timeTableData[0].Day);
    console.log(this.timeTableData[0].Period);
    console.log(this.timeTableData[0].Subject);

    
  }

}
class TimeTable{
  id!: number;
  Period!: number;
  Day!: string;
  Subject!: string;
  constructor( id:number, Period:number, Day:string, Subject:string){
    this.id=id;
    this.Day=Day;
    this.Period=Period;
    this.Subject=Subject;
  }
}