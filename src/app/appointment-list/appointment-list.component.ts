import { Component, OnInit, Input } from '@angular/core';
import { Appointment } from '../models/appointment';
import { ServiceService } from '../service.service';
import { Service } from '../models/service';

@Component({
  selector: 'app-appointment-list',
  templateUrl: './appointment-list.component.html',
  styleUrls: ['./appointment-list.component.css']
})
export class AppointmentListComponent implements OnInit {

  allServices = {};
  @Input()
  appointments: Appointment[] = [];
  constructor(private serviceService: ServiceService) { }

  ngOnInit() {
    this.serviceService.getServices().subscribe(services => {
      this.allServices = services.reduce((map, service) => {
        map['/services/' + service.key] = service.name;
        return map;
      });
    });
  }

}
