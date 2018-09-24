import {Component, Input, OnInit, EventEmitter, Output} from '@angular/core';
import {Service} from "../models/service";

@Component({
  selector: 'app-service-selector',
  templateUrl: './service-selector.component.html',
  styleUrls: ['./service-selector.component.css']
})
export class ServiceSelectorComponent implements OnInit {

  @Input()
  private services: Service[] = [];

  @Output()
  selectedService = new EventEmitter<Service>();

  constructor() { }

  ngOnInit() {
  }

  emitSelectedService(service: Service){
    this.selectedService.emit(service);
  }

}
