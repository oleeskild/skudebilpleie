import { Injectable } from '@angular/core';
import {AngularFirestore} from "angularfire2/firestore";
import {Observable} from "rxjs/index";
import {Service} from "./models/service";

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private db: AngularFirestore) {
  }

  getServices(): Observable<Service[]> {
    return this.db.collection<Service>('services').valueChanges();
  }
}
