import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppointmentSchedulerComponent } from './appointment-scheduler/appointment-scheduler.component';

const routes: Routes = [
  {
    path: 'avtale',
    component: AppointmentSchedulerComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
