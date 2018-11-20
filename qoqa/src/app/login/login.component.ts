import { Component, OnInit } from '@angular/core';
import { AuthService } from "../services/auth.service";
import { Router } from "@angular/router";
import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFireList } from 'angularfire2/database';
import { MiddlewareService } from '../services/middleware.service';
import { User } from '../data/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  title = 'qoqa';
  attempted = false;
  isNewUser = false;

  ngOnInit() {
    console.log("calling ngOnInit in login component.ts")
  }

  constructor(db: AngularFireDatabase, private authService: AuthService, private router: Router, private data: MiddlewareService) {
  }

  signInWithFacebook() {
    this.authService.FacebookSignIn()
      .then((res) => {

      })
      .catch((err) => console.log(err));
  }
  signInWithGoogle() {
    if (this.attempted == false) {
      this.authService.GoogleSignIn()
      .then((res) => {
        if (res != null) {
          this.data.IsNewUser(res.user.uid, (isNewUser) => {
            console.log("once");
            if (isNewUser) {
              this.isNewUser = true
              let newUser = new User()
              newUser.uid = res.user.uid
              newUser.email = res.user.email
              this.data.AddUser(newUser)
              this.isNewUser = true
              this.router.navigate(['profile'])
            } else {
              if (this.isNewUser) {
                this.router.navigate(['profile'])
              } else {
                this.router.navigate(['home'])
              }
            }
          })
        }
      })
      .catch((err) => console.log(err + "ERROR"));
      this.attempted = true
    }
    else {
      if (this.isNewUser) {
        this.router.navigate(['profile'])
      }
      else {
        this.router.navigate(['home'])
      }
    }

  }
}
