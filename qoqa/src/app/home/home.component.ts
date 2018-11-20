import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';



// export class HomeComponent implements OnInit {

//   events = EVENTS;

//   constructor(private database: AngularFireDatabase) {
//   	// this.events = 
//   	// console.log(database.list('events').valueChanges())
//   	// database.list('events').valueChanges().subscribe(console.log);
//   	database.list('events').valueChanges().subscribe(data => {
//   		// console.log(data)
//   		// let thisEvent = new Event();
//   		// thisEvent.title = data[0][0].title
//   		// console.log(data[0][0].title)
//   		// this.events.push(thisEvent)
//   		// console.log
//   	});
//   	// console.log("events" + this.events)
//   }

//   ngOnInit() {
//   }

// }

// export interface EventsList {
//   name: string;
// }

// const EVENT_DATA: EventsList[] = [
//   {name: 'whatwhatwhat' }
// ];

// @Component({
//   selector: 'app-home',
//   templateUrl: './home.component.html',
//   styleUrls: ['./home.component.css']
// })

// export class HomeComponent {
//   displayedColumns: string[] = ['name'];
//   dataSource = EVENT_DATA;
// }

/**
 * @title Basic use of `<table mat-table>`
 */
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
}

