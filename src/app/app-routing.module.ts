import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppointmentSchedulerComponent } from './appointment-scheduler/appointment-scheduler.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ServicesComponent } from './services/services.component';

const routes: Routes = [
  {
    path: 'avtale',
    component: AppointmentSchedulerComponent
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  { 
    path: '**', 
    component: PageNotFoundComponent 
  },
  {
    path: 'tjenester',
    component: ServicesComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
