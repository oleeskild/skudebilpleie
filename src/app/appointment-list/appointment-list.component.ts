import { Component, OnInit, Input } from '@angular/core';
import { Appointment } from '../models/appointment';

@Component({
  selector: 'app-appointment-list',
  templateUrl: './appointment-list.component.html',
  styleUrls: ['./appointment-list.component.css']
})
export class AppointmentListComponent implements OnInit {

  @Input()
  appointments: Appointment[] = [];
  constructor() { }

  ngOnInit() {
  }

}
