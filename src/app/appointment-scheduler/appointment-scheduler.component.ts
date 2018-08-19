import {Component, OnInit} from '@angular/core';
import {AppointmentService} from '../appointment.service';
import {ActivatedRoute} from "@angular/router";
import {ServiceService} from "../service.service";
import {Service} from "../models/service";

@Component({
  selector: 'app-appointment-scheduler',
  templateUrl: './appointment-scheduler.component.html',
  styleUrls: ['./appointment-scheduler.component.css']
})
export class AppointmentSchedulerComponent implements OnInit {

  timeArr: Date[];

  selectedDate: Date;

  private services: Service[] = [];
  private selectedService: Service;

  constructor(private appointmentService: AppointmentService, private route: ActivatedRoute, private serviceService: ServiceService) {
  }

  ngOnInit() {
    this.appointmentService.getAppointment("2");
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
    this.createTimeArray(event.value._d);
  }

  createTimeArray(chosenDate: Date) {
    let timeArr: Date[] = [];
    for (let i = 8; i <= 16; i++) {
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
