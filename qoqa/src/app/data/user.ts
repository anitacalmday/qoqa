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
  public eventHistory: Event[];
  public uid: string;
  public email: string;
  public phoneNumber: string;
  public organization: boolean;
}
