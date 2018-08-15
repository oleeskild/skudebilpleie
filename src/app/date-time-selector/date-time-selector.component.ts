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

  }

}
