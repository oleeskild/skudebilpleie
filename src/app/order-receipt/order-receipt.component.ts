import {Component, Input, OnInit} from '@angular/core';
import {Service} from "../models/service";
import {ContactInfo} from "../models/contact-info";

@Component({
  selector: 'app-order-receipt',
  templateUrl: './order-receipt.component.html',
  styleUrls: ['./order-receipt.component.css']
})
export class OrderReceiptComponent implements OnInit {

  @Input()
  selectedService: Service;

  @Input()
  selectedDate: Date;

  @Input()
  contactInfo: ContactInfo;

  constructor() { }

  ngOnInit() {
  }

  getEndOfAppointmentDate(startDate): Date{
    let endDate = new Date(startDate);
    endDate.setMinutes(startDate.getMinutes() + this.selectedService.durationMin);
    return endDate;
  }

}
