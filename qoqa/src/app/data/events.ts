import { User } from './user';
import { Time } from "@angular/common";
import { Qoqa } from './qoqa';

export class Event {
  title: string;
  eventID: string;
  organizer: User;
  host: string;
  location: string;
  date: Date;
  time: Time;
  description: string;
  qoqas: Qoqa[];
  attendees: User[];
}
