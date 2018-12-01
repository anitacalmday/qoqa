import { Event } from './events';

export class User {
  constructor() {}
  setEventHistory(events: Event[]) {
    this.eventHistory = events;
  }
  getEventHistory() {
    return this.eventHistory;
  }
  setPhoneNumber(phoneNumber: string) {
    this.phoneNumber = phoneNumber;
  }
  getPhoneNumnber() {
    return this.phoneNumber;
  }
  eventHistory: Event[];
  uid: string;
  email: string;
  phoneNumber: string;
  organization: boolean;
}
