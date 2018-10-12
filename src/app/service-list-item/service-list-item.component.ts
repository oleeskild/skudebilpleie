import {Component, Input, OnInit} from '@angular/core';
import {Service} from '../models/service';

@Component({
  selector: 'app-service-list-item',
  templateUrl: './service-list-item.component.html',
  styleUrls: ['./service-list-item.component.css']
})
export class ServiceListItemComponent implements OnInit {

  @Input()
  service: Service;

  @Input()
  showOrderButton = true;

  constructor() { }

  ngOnInit() {
  }

}
