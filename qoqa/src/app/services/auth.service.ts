import { Injectable } from '@angular/core';
import { Router } from "@angular/router";
import { AngularFireAuth } from "@angular/fire/auth";
import { auth } from 'firebase/app';
import * as firebase from 'firebase/app';
import { Observable } from 'rxjs';
import { first } from 'rxjs/operators';

@Injectable()
export class AuthService {
  public user: Observable<firebase.User>;
  constructor(private af: AngularFireAuth, private router: Router) {
    this.user = af.authState;
    console.log(af.authState);
  }
  FacebookSignIn() {
    return this.af.auth.signInWithPopup(new auth.FacebookAuthProvider())
      .catch(error => console.log(error));
  }
  GoogleSignIn() {
    return this.af.auth.signInWithPopup(new auth.GoogleAuthProvider())
      .catch(error => console.log(error));
  }
  isLoggedIn() {
   return this.af.authState.pipe(first()).toPromise();
  }

  logout() {
    this.af.auth.signOut()
      .then((res) => this.router.navigate(['/']));
  }
}
