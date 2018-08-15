import {Component, Input, OnInit} from '@angular/core';
import {Service} from "../models/service";

@Component({
  selector: 'app-service-selector',
  templateUrl: './service-selector.component.html',
  styleUrls: ['./service-selector.component.css']
})
export class ServiceSelectorComponent implements OnInit {

  @Input()
  private services: Service[] = [];

  constructor() { }

  ngOnInit() {
  }

}
