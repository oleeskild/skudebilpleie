import { Component, OnInit } from '@angular/core';
import { AppointmentService } from '../appointment.service';
import { Appointment } from '../models/appointment';
import { Service } from '../models/service';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {

  appointments: Appointment[] = [];
  services: Service[] = [];
  constructor(private appointmentService: AppointmentService, private serviceService: ServiceService) { }

  ngOnInit() {
    this.appointmentService.getFutureAppointments().subscribe(appointments => {
      this.appointments = appointments;
    });

    this.serviceService.getServices().subscribe(services => {
      this.services = services;
    });

  }

}
