import { User } from './user';
import { Event } from './events';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';


export class Individual extends User {
  constructor() {
    super();
  }
  setFirstName(name: string) {
    this.firstName = name;
  }
  setLastName(name: string) {
    this.lastName = name;
  }
  setDOB(dob: string) {
    this.dob = dob;
  }
  setSavedEvents(events: Event[]) {
    this.saved_events = events;
  }
  firstName: string;
  lastName: string;
  dob: string;
  saved_events: Event[];
  invitations: string[];
  organizationTruth = 0;
}
