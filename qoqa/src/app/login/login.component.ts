import { Component, OnInit } from '@angular/core';
import { AuthService } from "../services/auth.service";
import { Router } from "@angular/router";
import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFireList } from 'angularfire2/database';
import { MiddlewareService } from '../services/middleware.service';
import { User } from '../data/user';


// export const EVENTS: Event[] = [
//   { title: 'Mr. Nice' },
//   { title: 'Narco' },
//   { title: 'Bombasto' },
//   { title: 'Celeritas' }
// ];

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  title = 'qoqa';

  //events = EVENTS;
  // private eventCounter = 0;
  // public events:AngularFireList<Event[]>;

  ngOnInit() {
    console.log("calling ngOnInit in login component.ts")

  }

  constructor(db: AngularFireDatabase, private authService: AuthService, private router: Router, private data: MiddlewareService) {
  }

  signInWithFacebook() {
    this.authService.FacebookSignIn()
      .then((res) => {
        //this.router.navigate(['dashboard'])
      })
      .catch((err) => console.log(err));
  }
  signInWithGoogle() {
    this.authService.GoogleSignIn()
      .then((res) => {
        if (res != null) {
          this.data.IsNewUser(res.User.uid, (isNewUser) => {
            console.log('isNewUser' + isNewUser)
            if (isNewUser) {
              let newUser = new User()
              newUser.uid = res.user.uid
              newUser.email = res.User.email
              // newUser.firstName = res.user.firstName
              // newUser.lastName = res.user.lastName
              this.data.AddUser(newUser)
              // this.data.AddUserByID(res.user.uid);
              this.router.navigate(['profile'])
            } else {
              this.router.navigate(['home'])
            }
          })
          let current_user = new User()
          // current_user.title = res.user.uid
          this.data.AddUser(current_user)
        }
      })
      .catch((err) => console.log(err + "ERROR"));
  }
}
