import { Component, OnInit } from '@angular/core';
import { Service } from '../models/service';
import { AppointmentService } from '../appointment.service';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  services: Service[] = [];
  constructor(private serviceService: ServiceService) { }

  ngOnInit() {
    this.serviceService.getServices().subscribe(services =>{
      this.services = services;
    })
  }

}
