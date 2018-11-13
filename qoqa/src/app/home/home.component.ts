import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { MiddlewareService } from '../services/middleware.service';
import { Event } from '../data/events';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  events = null;

  constructor(private data: MiddlewareService) {
  	data.getEvents((eventsList) => {
      console.log(eventsList)
      let newEvent = new Event()
      newEvent.title = eventsList[0].title
      this.events = [newEvent]
    })
  	// console.log(data.getEvents())
  }

  ngOnInit() {
    let event = new Event()
    event.title = "test out therer"
    this.data.AddEvent(event)
  }

}
