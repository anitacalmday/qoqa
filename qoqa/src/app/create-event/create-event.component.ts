import { Component, OnInit } from '@angular/core';
import { MiddlewareService } from "../services/middleware.service";
import { AngularFireDatabase } from 'angularfire2/database';
import { Event } from "../data/events";

@Component({
  selector: 'app-create-event',
  templateUrl: './create-event.component.html',
  styleUrls: ['./create-event.component.css']
})
export class CreateEventComponent implements OnInit {
  event = new Event;
  constructor(private database: AngularFireDatabase, private data: MiddlewareService) { }

  ngOnInit() { }

  CreateEvent(event: Event): void { this.data.AddEvent(event); }

}
