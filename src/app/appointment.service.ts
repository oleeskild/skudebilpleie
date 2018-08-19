import { Injectable } from '@angular/core';
import {AngularFirestore} from "angularfire2/firestore";
import {Observable} from "rxjs/index";
import {Appointment} from "./models/appointment";

@Injectable({
  providedIn: 'root'
})
export class AppointmentService {

  constructor(private db: AngularFirestore) { }

  getAppointments(): Observable<Appointment[]> {
    return this.db.collection<Appointment>('appointments').valueChanges();
  }

  getAppointmentsByDate(date: Date): Observable<Appointment[]> {
    let dateAtMidnight = new Date(date);
    dateAtMidnight.setHours(0, 0, 0, 0);
    let nextDateAtMidnight = new Date(dateAtMidnight);
    nextDateAtMidnight.setDate(nextDateAtMidnight.getDate() + 1);
    return this.db.collection<Appointment>('appointments', ref => ref
      .where('dateTime', '>=', dateAtMidnight)
      .where('dateTime', '<', nextDateAtMidnight)).valueChanges();
  }

  getAppointment(id: string): Observable<Appointment> {
    return this.db.doc<Appointment>('appointments/' + id).valueChanges();
  }
}
