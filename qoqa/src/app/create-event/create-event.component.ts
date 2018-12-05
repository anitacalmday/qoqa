import { Component, OnInit } from '@angular/core';
import { MiddlewareService } from "../services/middleware.service";
import { AngularFireDatabase } from 'angularfire2/database';
import { Event } from "../data/events";
import { Time } from "@angular/common";
import { Router } from "@angular/router";

@Component({
  selector: 'app-create-event',
  templateUrl: './create-event.component.html',
  styleUrls: ['./create-event.component.css']
})
export class CreateEventComponent implements OnInit {
  event = new Event;
  title = '';
  location1 = '';
  date = new Date();
  time: Time;
  host = '';
  description = '';
  eventCount = 0;

  constructor(public database: AngularFireDatabase, private data: MiddlewareService, private router: Router) {
    this.data.getEvents((data) => {
      for(var i = 0; i<data.length; i++) {
        this.eventCount = this.eventCount + 1;
      }
    });
  }

  ngOnInit() { }
  CreateEvent(): void {
    console.log('eventCount: ' + this.eventCount);
    if (parseInt(sessionStorage.getItem('isOrg'))) {
      this.data.getOrganization(sessionStorage.getItem('uid'), (organization) => {
        console.log(organization);
        this.event.organizer = organization;});
    } else {
      this.data.getIndividual(sessionStorage.getItem('uid'), (individual) => {
        console.log(individual);
        this.event.organizer = individual;})
    }
    this.event.qoqas = [];
    this.event.host = this.host;
    for(var i = 0; i<this.host.split(" ").length; i++) {
      this.data.addInvite(this.eventCount.toString(), this.host.split(" ")[i]);
    }
    this.event.location = this.location1;
    this.event.title = this.title;
    this.event.attendees = [];
    this.event.date = this.date;
    this.event.time = this.time;
    this.event.description = this.description;
    this.event.eventID = this.eventCount.toString();
    this.data.AddEvent(this.event);
    this.router.navigate(['create-qoqa']);
  }

}
