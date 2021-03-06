import { Injectable } from '@angular/core';
import {AngularFirestore} from "angularfire2/firestore";
import {Observable} from "rxjs/index";
import {Service} from "./models/service";
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private db: AngularFirestore) {
  }

  getServices(): Observable<Service[]> {
    return this.db.collection<Service>('services').snapshotChanges().pipe(map(references =>{
      return references.map(serviceRef => {
        const service = serviceRef.payload.doc.data() as Service;
        service.key = serviceRef.payload.doc.id;

        return service;
      });

    }));
  }

  getService(serviceReference: string): Observable<Service> {
    return this.db.doc<Service>(serviceReference).valueChanges();
  }

  add(service: Service) {
    this.db.collection<Service>('services').add(service);
  }

  update(service: Service){
    this.db.collection<Service>('services').doc(service.key).update(service);
  }

}
