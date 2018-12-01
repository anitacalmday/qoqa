import { User } from './user';
import { Event } from './events';
import { Location} from '@angular/common';
import { Qoqa } from './qoqa';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';


export class Organization extends User {
  constructor() {
    super();
  }
  setTitle(name: string) {
    this.title = name;
  }
  getTitle() {
    return this.title;
  }
  setAddress(address: Location) {
    this.address = address;
  }
  getAddress() {
    return this.address;
  }
  setUpcomingEvent(events: Event[]) {
    this.upcomingEvent = events;
  }
  getUpcomingEvent() {
    return this.upcomingEvent;
  }
  setQoqaHistory(qoqas: Qoqa[]) {
    this.qoqaHistory = qoqas;
  }
  getQoqaHistory() {
    return this.qoqaHistory;
  }
  title: string;
  address: Location;
  upcomingEvent: Event[];
  qoqaHistory: Qoqa[];
}
