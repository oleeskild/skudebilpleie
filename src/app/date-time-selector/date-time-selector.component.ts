import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-date-time-selector',
  templateUrl: './date-time-selector.component.html',
  styleUrls: ['./date-time-selector.component.css']
})
export class DateTimeSelectorComponent implements OnInit {

  private timeArr: Date[] = [];
  private selectedDate: Date;

  constructor() { }

  ngOnInit() {
  }

  dateChange(e: any) {
    this.createTimeArray(e.value._d);
  }

  createTimeArray(chosenDate: Date){
    let timeArr: Date[] = [];
    for(let i = 8; i<=16; i++){
      let date = new Date(chosenDate);
      date.setHours(i);
      date.setMinutes(0);
      date.setSeconds(0);
      timeArr.push(date);
      date = new Date(chosenDate);
      date.setHours(i);
      date.setMinutes(30);
      date.setSeconds(0);
      timeArr.push(date);
    }
    this.timeArr = timeArr;
  }


}
