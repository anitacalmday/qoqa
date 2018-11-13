import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';



export class Event {
  title: string;
}

export class User {
  userType: string;

}

export const EVENTS: Event[] = [
  { title: 'Mr. Nice' },
  { title: 'Narco' },
  { title: 'Bombasto' },
  { title: 'Celeritas' }
];


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  events = EVENTS;

  constructor(private database: AngularFireDatabase) {
  	// this.events = 
  	// console.log(database.list('events').valueChanges())
  	// database.list('events').valueChanges().subscribe(console.log);
  	database.list('events').valueChanges().subscribe(data => {
  		console.log(data)
  		let thisEvent = new Event();
  		thisEvent.title = data[0][0].title
  		console.log(data[0][0].title)
  		this.events.push(thisEvent)
  		// console.log
  	});
  	// console.log("events" + this.events)
  }

  ngOnInit() {
  }

}
