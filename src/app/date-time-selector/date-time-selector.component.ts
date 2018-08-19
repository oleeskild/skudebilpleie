import { Component, OnInit, Input } from '@angular/core';
import {Appointment} from '../models/appointment';
import { AppointmentService } from '../appointment.service';
import { Service } from '../models/service';

@Component({
  selector: 'app-date-time-selector',
  templateUrl: './date-time-selector.component.html',
  styleUrls: ['./date-time-selector.component.css']
})
export class DateTimeSelectorComponent implements OnInit {

  private timeArr: Date[] = [];
  private selectedDate: Date;

  @Input()
  selectedService: Service;
  
  private appointmentsAtSelectedDate: Appointment[];

  constructor(private appointmentService: AppointmentService) { }

  ngOnInit() {
  }

  dateChange(event) {
    this.selectedDate = event.value._d;
    this.appointmentService.getAppointmentsByDate(this.selectedDate).subscribe(appointments => {
      console.log(appointments);
      this.appointmentsAtSelectedDate = appointments;
      this.createTimeArray(this.selectedDate);
    });
  }

  isAvailable(date: Date, service: Service): boolean {
    let found = this.appointmentsAtSelectedDate.find(appointment => {
      let x1 = date;
      let x2 = new Date(date);
      x2.setMinutes(x1.getMinutes() + service.durationMin);


      let y1 =new Date(appointment.dateTime.toDate());
      let y2 = new Date(appointment.dateTime.toDate());
      y2.setMinutes(y1.getMinutes() + appointment.durationInMin);

      let isOverlap = (x1 < y2 && y1 < x2);
      return !isOverlap;
    });

    return found ? true : false;
  }

createTimeArray(chosenDate: Date) {
    let timeArr: Date[] = [];
    for (let i = 8; i <= 16; i++) {
      let date = new Date(chosenDate);
      date.setHours(i, 0, 0, 0);
      timeArr.push(date);
      date = new Date(chosenDate);
      date.setHours(i, 30,0,0);
      timeArr.push(date);
    }
    this.timeArr = timeArr;
  }


}
