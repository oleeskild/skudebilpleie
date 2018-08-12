import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppointmentSchedulerComponent } from './appointment-scheduler/appointment-scheduler.component'
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatDividerModule, MatGridListModule, MatListModule, MatStepperModule, MatFormFieldModule, MatInputModule, MatButtonModule, MatIconModule, MatDatepickerModule, MatRadioModule} from '@angular/material';
import {MatMomentDateModule} from '@angular/material-moment-adapter';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ServiceSelectorComponent } from './service-selector/service-selector.component';
import { MAT_DATE_LOCALE } from '@angular/material';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    AppointmentSchedulerComponent,
    ServiceSelectorComponent,
    HomeComponent,
    PageNotFoundComponent
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
    MatRadioModule
  ],
  providers: [
    {provide: MAT_DATE_LOCALE, useValue: 'nb'},
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
