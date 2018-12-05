import { Component, OnInit } from '@angular/core';
import { MiddlewareService } from '../services/middleware.service';
import { Router } from "@angular/router";

import { Event } from '../data/events';
import {Router} from "@angular/router";


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  events = null;

  constructor(private data: MiddlewareService, private router: Router) {
  	this.data.getEvents( (eventsList) => {
      console.log(eventsList)
      this.events = eventsList
    })
  }

  ngOnInit() {
  }
  joinEvent(event: Event) {
    sessionStorage.setItem('eventID', JSON.stringify(event));
    this.router.navigate(['/fill-qoqa']);
  }
}

