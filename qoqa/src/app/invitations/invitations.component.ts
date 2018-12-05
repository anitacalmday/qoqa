import { Component, OnInit } from '@angular/core';
import {MiddlewareService} from "../services/middleware.service";
import { Router } from '@angular/router';
import { Event } from '../data/events';

@Component({
  selector: 'app-invitations',
  templateUrl: './invitations.component.html',
  styleUrls: ['./invitations.component.css']
})
export class InvitationsComponent implements OnInit {
  events = null;

  constructor(private data: MiddlewareService, private router: Router) {
    this.data.getInvites(sessionStorage.getItem('uid'), invitations => {
      var invitationList = invitations;
      this.events = invitationList;
      console.log('Invitations: ' + invitationList);
      for(let invite of invitationList) {
        this.data.getEvent(invite, (event) => {
          var currEvent = new Event();
          currEvent = event;
          this.events.push(currEvent);
        })
      }
    })
  }
  ngOnInit() {
  }
  accept() {
    this.router.navigate(['/invitations']);
  }
  decline(eventId: string) {
    this.data.declineInvite(eventId, sessionStorage.getItem('uid'));
    this.router.navigate(['/invitations']);
  }
}
