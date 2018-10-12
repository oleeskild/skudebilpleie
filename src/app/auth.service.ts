import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private user: Observable<firebase.User>;
  private userDetails: firebase.User = null;
  constructor(private firebaseAuth: AngularFireAuth, private router: Router ) {
      this.user = firebaseAuth.authState;

      this.user.subscribe(user => {
        if (user) {
          this.userDetails = user;
        } else {
          this.userDetails = null;
        }
      });
   }

  isAuthenticated(): boolean {
    if (this.userDetails === null) {
      return false;
    } else {
      return true;
    }
  }

   login(email: string, password: string): Promise < firebase.auth.UserCredential > {
     return this.firebaseAuth.auth.signInWithEmailAndPassword(email, password);
   }

   logout() {
     this.firebaseAuth.auth.signOut().then(res => {this.router.navigate(['/']);});
   }
}
