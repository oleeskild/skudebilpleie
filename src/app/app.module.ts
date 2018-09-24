import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppointmentSchedulerComponent } from './appointment-scheduler/appointment-scheduler.component'
import {MatToolbarModule} from '@angular/material/toolbar';
import {
  MatDividerModule,
  MatGridListModule,
  MatListModule,
  MatStepperModule,
  MatFormFieldModule,
  MatInputModule,
  MatButtonModule,
  MatIconModule,
  MatDatepickerModule,
  MatRadioModule,
  MatCardModule
} from '@angular/material';
import {MatMomentDateModule} from '@angular/material-moment-adapter';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ServiceSelectorComponent } from './service-selector/service-selector.component';
import { MAT_DATE_LOCALE } from '@angular/material';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AngularFireModule } from 'angularfire2';
import { environment } from '../environments/environment';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { ServicesComponent } from './services/services.component';
import { ServiceCardComponent } from './service-card/service-card.component';
import { DateTimeSelectorComponent } from './date-time-selector/date-time-selector.component';
import { ContactInfoComponent } from './contact-info/contact-info.component';
import { OrderReceiptComponent } from './order-receipt/order-receipt.component';
import { ServiceListItemComponent } from './service-list-item/service-list-item.component';
import { TimeFormatPipe } from './time-format.pipe';


@NgModule({
  declarations: [
    AppComponent,
    AppointmentSchedulerComponent,
    ServiceSelectorComponent,
    HomeComponent,
    PageNotFoundComponent,
    ServicesComponent,
    ServiceCardComponent,
    DateTimeSelectorComponent,
    ContactInfoComponent,
    OrderReceiptComponent,
    ServiceListItemComponent,
    TimeFormatPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatDividerModule,
    MatGridListModule,
    MatListModule,
    MatStepperModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatDatepickerModule,
    MatMomentDateModule,
    MatRadioModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireAuthModule,
    MatCardModule
  ],
  providers: [
    {provide: MAT_DATE_LOCALE, useValue: 'nb'},
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
