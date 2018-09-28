import { Component, OnInit, Input } from '@angular/core';
import { Services } from '@angular/core/src/view';

@Component({
  selector: 'app-service-list',
  templateUrl: './service-list.component.html',
  styleUrls: ['./service-list.component.css']
})
export class ServiceListComponent implements OnInit {

  @Input()
  services: Services[] = [];

  constructor() { }

  ngOnInit() {
  }

}
