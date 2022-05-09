import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TimetableService {

  TimeTableData(){
    let data:TimeTable[];
    return fetch("./timeTable.json").then(result=>result.json()).then(result=>data.push(result)).catch((error)=>console.log(error)
    )
    console.log(data);
    
  }

  constructor() { }
}

class TimeTable{
  id!: number;
  Period!: string;
  Day!:string;
  Subject!:string;

}