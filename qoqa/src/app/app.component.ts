import { Component } from '@angular/core';
import {AuthService} from "./services/auth.service";
import {Router} from "@angular/router";
import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFireList } from 'angularfire2/database';

export class Event {
  title: string;
}

// export const EVENTS: Event[] = [
//   { title: 'Mr. Nice' },
//   { title: 'Narco' },
//   { title: 'Bombasto' },
//   { title: 'Celeritas' }
// ];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'qoqa';

  //events = EVENTS;
  private eventCounter = 0;
  public events:AngularFireList<Event[]>;

  constructor(db: AngularFireDatabase, private authService: AuthService, private router: Router) {
    this.events= db.list('/events');
    //this.AddEvent("Shumba");
  }

  public AddEvent(eventTitle:string): void {
    let newEvent = new Event();
    newEvent.title = eventTitle;
    // let newEvent = new Event(`My event #${this.eventCounter++}`);
    this.events.push([newEvent]);
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
        //this.router.navigate(['dashboard'])
      })
      .catch((err) => console.log(err));
  }
}
