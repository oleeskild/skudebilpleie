import {Component, OnInit} from '@angular/core';
import {AppointmentService} from '../appointment.service';
import {ActivatedRoute} from "@angular/router";
import {ServiceService} from "../service.service";
import {Service} from "../models/service";
import {Appointment} from "../models/appointment"
import { MatStepper } from '@angular/material';

@Component({
  selector: 'app-appointment-scheduler',
  templateUrl: './appointment-scheduler.component.html',
  styleUrls: ['./appointment-scheduler.component.css']
})
export class AppointmentSchedulerComponent implements OnInit {

  timeArr: Date[];

  selectedDate: Date;
  private appointmentsAtSelectedDate: Appointment[];

  serviceStepName: string = "Velg tjeneste";

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

  goForward(stepper: MatStepper){
    stepper.next();
  }

  setSelectedService(service: Service){
    this.selectedService = service;
    this.serviceStepName = "Valgt tjeneste: " + service.name;
  }

}
