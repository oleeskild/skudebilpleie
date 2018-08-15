import {Component, OnInit, Input} from '@angular/core';
import {Service} from "../models/service";

@Component({
  selector: 'app-service-card',
  templateUrl: './service-card.component.html',
  styleUrls: ['./service-card.component.css']
})
export class ServiceCardComponent implements OnInit {

  @Input()
  service: Service;

  @Input()
  showImage: boolean = true;

  constructor() {
  }

  ngOnInit() {

  }

}
