import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { AppointmentService } from '../appointment.service';

@Component({
  selector: 'app-appointment-scheduler',
  templateUrl: './appointment-scheduler.component.html',
  styleUrls: ['./appointment-scheduler.component.css']
})
export class AppointmentSchedulerComponent implements OnInit {

  timeArr: Date[];

  selectedDate: Date;


  constructor(private appointmentService: AppointmentService) { }

  ngOnInit() {
    this.appointmentService.getAppointment("2");    
  }

  dateChange(event){
    this.createTimeArray(event.value._d);
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
