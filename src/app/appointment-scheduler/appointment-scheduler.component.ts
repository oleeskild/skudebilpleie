import { Component, OnInit } from '@angular/core';
import { AppointmentService } from '../appointment.service';
import { ActivatedRoute } from "@angular/router";
import { ServiceService } from "../service.service";
import { Service } from "../models/service";
import { Appointment } from "../models/appointment"
import { MatStepper } from '@angular/material';

@Component({
  selector: 'app-appointment-scheduler',
  templateUrl: './appointment-scheduler.component.html',
  styleUrls: ['./appointment-scheduler.component.css']
})
export class AppointmentSchedulerComponent implements OnInit {

  timeArr: Date[];

  selectedDate: Date;

  serviceStepName = "Velg tjeneste";
  dateStepName = "Velg tid";

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

  goForward(stepper: MatStepper) {
    stepper.next();
  }

  setSelectedService(service: Service) {
    this.selectedService = service;
    this.serviceStepName = "Valgt tjeneste: " + service.name;
  }

  setSelectedDate(date: Date) {
    date = new Date(date);
    this.selectedDate = date;

    this.dateStepName = `Valgt tid: 
      ${date.getDate()}.${(date.getMonth())}.${date.getFullYear()} 
      Klokken ${(date.getHours())}:${(date.getMinutes() + "0").substring(0,2)}`
  }

}
