import { Injectable } from '@angular/core';
import {AngularFirestore} from "angularfire2/firestore";
import {Observable} from "rxjs/index";
import {Appointment} from "./models/appointment";
import * as firebase from 'angularfire2';


@Injectable({
  providedIn: 'root'
})
export class AppointmentService {

  constructor(private db: AngularFirestore) { }

  getAppointments(): Observable<Appointment[]> {
    return this.db.collection<Appointment>('appointments').valueChanges();
  }

  getAppointmentsByDate(date: Date): Observable<Appointment[]> {
    const dateAtMidnight = new Date(date);
    dateAtMidnight.setHours(0, 0, 0, 0);
    const nextDateAtMidnight = new Date(dateAtMidnight);
    nextDateAtMidnight.setDate(nextDateAtMidnight.getDate() + 1);
    return this.db.collection<Appointment>('appointments', ref => ref
      .where('dateTime', '>=', dateAtMidnight)
      .where('dateTime', '<', nextDateAtMidnight)).valueChanges();
  }

  getFutureAppointments(): Observable<Appointment[]> {
    const dateAtMidnight = new Date();
    dateAtMidnight.setHours(0, 0, 0, 0);
    return this.db.collection<Appointment>('appointments', ref => ref
      .where('dateTime', '>=', dateAtMidnight)).valueChanges();
  }

  getAppointment(id: string): Observable<Appointment> {
    return this.db.doc<Appointment>('appointments/' + id).valueChanges();
  }

  createAppointment(appointment: Appointment){
    return this.db.collection<Appointment>('appointments').add(appointment);
  }
}
