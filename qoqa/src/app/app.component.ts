import { Component } from '@angular/core';
import {AuthService} from "./services/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['../styles.scss']
})
export class AppComponent {
  title = 'qoqa';
  constructor(private authService: AuthService, private router: Router) {
  }
  signInWithFacebook() {
    this.authService.FacebookSignIn()
      .then((res) => {
        //this.router.navigate(['dashboard'])
      })
      .catch((err) => console.log(err));
  };
  signInWithGoogle() {
    this.authService.GoogleSignIn()
      .then((res) => {
        //this.router.navigate(['dashboard'])
      })
      .catch((err) => console.log(err));
  }
}
