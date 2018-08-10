import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-appointment-scheduler',
  templateUrl: './appointment-scheduler.component.html',
  styleUrls: ['./appointment-scheduler.component.css']
})
export class AppointmentSchedulerComponent implements OnInit {

  //firstFormGroup: FormGroup;
  //secondFormGroup: FormGroup;

  timeArr: Date[];

  selectedDate: Date;

  constructor(private _formBuilder: FormBuilder) { }

  ngOnInit() {
    /*this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required],
      timeControl: new FormControl()
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    });*/

  

    
  }

  dateChange(event){
    this.createTimeArray(event.value._d);
  }

  createTimeArray(chosenDate: Date){
    let timeArr: Date[] = [];
    for(let i = 8; i<=16; i++){
       let date = new Date(chosenDate);
       date.setHours(i);
       date.setMinutes(0);
       date.setSeconds(0);
       timeArr.push(date);
       date = new Date(chosenDate);
       date.setHours(i);
       date.setMinutes(30);
       date.setSeconds(0);
       timeArr.push(date);
    }
    this.timeArr = timeArr;
  }

  
  

}
