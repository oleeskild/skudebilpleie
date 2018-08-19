import {Component, OnInit} from '@angular/core';
import {AppointmentService} from '../appointment.service';
import {ActivatedRoute} from "@angular/router";
import {ServiceService} from "../service.service";
import {Service} from "../models/service";
import {Appointment} from "../models/appointment"

@Component({
  selector: 'app-appointment-scheduler',
  templateUrl: './appointment-scheduler.component.html',
  styleUrls: ['./appointment-scheduler.component.css']
})
export class AppointmentSchedulerComponent implements OnInit {

  timeArr: Date[];

  selectedDate: Date;
  private appointmentsAtSelectedDate: Appointment[];


  private services: Service[] = [];
  private selectedService: Service;

  constructor(private appointmentService: AppointmentService, private route: ActivatedRoute, private serviceService: ServiceService) {
  }

  ngOnInit() {
    this.serviceService.getServices().subscribe(services => {
      this.services = services;
      this.route.params.subscribe(params => {
        let selectedServiceName = params["serviceName"];
        if (selectedServiceName) {
          this.selectedService = services.find(service => {
            return service.name.toLowerCase() === selectedServiceName.toLowerCase();
          });
        }
      });
    });
  }

  dateChange(event) {
    this.selectedDate = event.value._d;
    this.appointmentService.getAppointmentsByDate(this.selectedDate).subscribe(appointments => {
      this.appointmentsAtSelectedDate = appointments;
      this.createTimeArray(this.selectedDate);
    });
  }

  isAvailable(date: Date, service: Service): boolean {
    let found = this.appointmentsAtSelectedDate.find(appointment => {
      let end = new Date(appointment.dateTime);
      end.setMinutes(end.getMinutes() + appointment.durationInMin);
      return date < appointment.dateTime && date < end;
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
