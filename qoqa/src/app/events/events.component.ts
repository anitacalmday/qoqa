import { Component, OnInit, ViewChild } from '@angular/core';
import {MatPaginator, MatTableDataSource} from '@angular/material';
import {CdkTreeModule} from '@angular/cdk/tree';
import {MatTreeModule} from '@angular/material';
import {Observable} from 'rxjs';
import {AngularFireDatabase, AngularFireList } from 'angularfire2/database';


@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})

export class EventsComponent implements OnInit {
  constructor() { }
  ngOnInit() {
  }
  events: Event[];
  displayedColumns = ['title', 'host', 'location', 'organizer', 'time'];
  dataSource = new MatTableDataSource<Event>(EVENT_DATA);

  @ViewChild(MatPaginator) paginator: MatPaginator;

    /**
   * Set the paginator after the view init since this component will
   * be able to query its view for the initialized paginator.
   */
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
}

export interface Event {
  title: string;
  host: string;
  location: string;
  organizer: string;
  time: string;
}


const EVENT_DATA: Event[] = [
  {title: "idkdikidk", host: "Google", location:"somewhere", organizer:"SA", time:"12:pm"}];






















// export class EventsComponent implements OnInit {

//   constructor() { }

//   ngOnInit() {
//   }

// }
