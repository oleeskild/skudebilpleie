import { Component, OnInit, Input, Inject } from '@angular/core';
import { Services } from '@angular/core/src/view';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { Service } from '../models/service';
import { ServiceService } from '../service.service';

export interface DialogData {
  service: Service;
}

@Component({
  selector: 'app-service-list',
  templateUrl: './service-list.component.html',
  styleUrls: ['./service-list.component.css']
})
export class ServiceListComponent implements OnInit {

  @Input()
  services: Services[] = [];

  constructor(private dialog: MatDialog) { }

  ngOnInit() {
  }

  openNewServiceDialog() {
    const dialogRef = this.dialog.open(NewServiceDialogComponent, {
      height: '600px',
      width: '700px',
    });
  }

  openEditDialog(service: Service){
    const dialogRef = this.dialog.open(UpdateServiceDialog, {
      height: '600px',
      width: '700px',
      data: {service: service}
    });
  }

}

@Component({
  selector: 'app-new-service-dialog',
  template: `
    <h2>Ny tjeneste</h2>
    <form name="service">
      <mat-form-field>
        <input placeholder="Navn" matInput name="service-name" type="text" [(ngModel)]="serviceName">
      </mat-form-field>
      <mat-form-field>
        <input placeholder="Varighet i minutter" matInput name="duration" type="number" [(ngModel)]="durationInMinutes">
      </mat-form-field>
      <mat-form-field>
        <input placeholder="Pris" matInput name="price" type="number" [(ngModel)]="price">
      </mat-form-field>
      <mat-form-field>
        <input placeholder="Bildelenke" matInput name="imagelink" type="number" [(ngModel)]="img">
      </mat-form-field>
      <mat-form-field>
        <textarea rows="5" placeholder="Beskrivelse" matInput name="description" [(ngModel)]="description"></textarea>
      </mat-form-field>
      <button mat-raised-button (click)="saveService()">Lagre</button>
    </form>
  `,
  styles: [`
    mat-form-field {
      width: 100%;
    }
  `]
})
export class NewServiceDialogComponent {

  serviceName = '';
  durationInMinutes: number;
  description = '';
  price: number;
  img = '';

  constructor(
    public dialogRef: MatDialogRef<NewServiceDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
    private serviceService: ServiceService) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  saveService() {
    const service: Service = {
      name: this.serviceName,
      description: this.description,
      durationMin: this.durationInMinutes,
      price: this.price,
      key: '',
      img: this.img
    };
    this.serviceService.add(service);
    this.dialogRef.close();
  }
}

@Component({
  selector: 'app-update-service-dialog',
  template: `
    <h2>Oppdater tjeneste</h2>
    <form name="service">
      <mat-form-field>
        <input placeholder="Navn" matInput name="service-name" type="text" [(ngModel)]="service.name">
      </mat-form-field>
      <mat-form-field>
        <input placeholder="Varighet i minutter" matInput name="duration" type="number" [(ngModel)]="service.durationMin">
      </mat-form-field>
      <mat-form-field>
        <input placeholder="Pris" matInput name="price" type="number" [(ngModel)]="service.price">
      </mat-form-field>
      <mat-form-field>
        <input placeholder="Bildelenke" matInput name="imagelink" type="number" [(ngModel)]="service.img">
      </mat-form-field>
      <mat-form-field>
        <textarea rows="5" placeholder="Beskrivelse" matInput name="description" [(ngModel)]="service.description"></textarea>
      </mat-form-field>
      <button mat-raised-button (click)="onNoClick()" style="margin-right: 5px">Avbryt</button>
      <button mat-raised-button color="primary" (click)="updateService()">Lagre</button>
    </form>
  `,
  styles: [`
    mat-form-field {
      width: 100%;
    }
  `]
})
export class UpdateServiceDialog{

  service: Service;
  constructor(
    public dialogRef: MatDialogRef<NewServiceDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
    private serviceService: ServiceService) {
      this.service = data.service;
    }

  onNoClick(): void {
    this.dialogRef.close();
  }

  updateService() {
    this.serviceService.update(this.service);
    this.dialogRef.close();
  }
}
