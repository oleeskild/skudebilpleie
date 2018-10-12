import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email = '';
  password = '';

  constructor(private authService: AuthService, private router: Router, private snackbar: MatSnackBar) { }

  ngOnInit() {
  }

  login() {
    this.authService.login(this.email, this.password).then(() => {
      this.router.navigate(['admin']);
    }, err => {
      this.snackbar.open('Feil brukernavn og passord', 'OK', {duration: 4000});
    });
  }

}
