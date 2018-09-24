import {Component, Input, OnInit} from '@angular/core';
import {ContactInfo} from "../models/contact-info";

@Component({
  selector: 'app-contact-info',
  templateUrl: './contact-info.component.html',
  styleUrls: ['./contact-info.component.css']
})
export class ContactInfoComponent implements OnInit {

  @Input()
  contactInfo: ContactInfo;

  constructor() { }

  ngOnInit() {
  }

}
