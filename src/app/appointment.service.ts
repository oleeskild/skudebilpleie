import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppointmentService {

  constructor() { }

  getAppointments(){
    return [];
  }

  getAppointment(id: string){
    return null;
  }
}
