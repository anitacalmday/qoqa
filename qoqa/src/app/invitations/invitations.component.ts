import { Component, OnInit } from '@angular/core';
import {MiddlewareService} from "../services/middleware.service";
import { Router } from '@angular/router';

@Component({
  selector: 'app-invitations',
  templateUrl: './invitations.component.html',
  styleUrls: ['./invitations.component.css']
})
export class InvitationsComponent implements OnInit {
  events = [];

  constructor(private data: MiddlewareService, private router: Router) {
    this.populateInvitations();
  }
  ngOnInit() {
  }
  populateInvitations() {
    this.events = [];
    this.data.getEvents( (eventsList) => {
      console.log(eventsList);
      for(var i=0; i<eventsList.length; i++) {
        console.log("event of Event List: " + eventsList[i]);
        if (eventsList[i].host === sessionStorage.getItem('uid')) {
          this.events.push(eventsList[i]);
        }
      }
    })
  }
  accept() {
    this.router.navigate(['/invitations']);
  }
  decline(eventId: string) {
    console.log('decline called!');
    console.log('eventId being deleted from invitations: ' + eventId);
    this.data.declineInvite(eventId, sessionStorage.getItem('uid'));
    this.populateInvitations();
    // this.router.navigate(['/invitations']);
  }
}
