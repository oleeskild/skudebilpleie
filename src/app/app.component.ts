import { Component } from '@angular/core';
import { AuthService } from './auth.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  isAdmin = false;

  constructor(private _authService: AuthService, private route: Router){
    
  }

  ngOnInit(){
    this.isAdmin = this._authService.isAuthenticated();
    this.route.events.subscribe(change=> {
      this.isAdmin = this._authService.isAuthenticated();
    })
  }

  

  logout(){
    this._authService.logout();
    this.isAdmin = this._authService.isAuthenticated();
  }
}
