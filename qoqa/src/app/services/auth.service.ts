import { Injectable } from '@angular/core';
import { Router } from "@angular/router";
import { AngularFireAuth } from "@angular/fire/auth";
import { auth } from 'firebase/app';
import * as firebase from 'firebase/app';
import { Observable } from 'rxjs';

@Injectable()
export class AuthService {
  private user: Observable<firebase.User>;
  private userDetails: firebase.User = null;
  constructor(private af: AngularFireAuth, private _firebaseAuth: AngularFireAuth, private router: Router) {
    this.user = _firebaseAuth.authState;
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
    if (this.userDetails == null ) {
      return false;
    } else {
      return true;
    }
  }
  logout() {
    this._firebaseAuth.auth.signOut()
      .then((res) => this.router.navigate(['/']));
  }
}