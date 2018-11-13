import { User } from './user';
import { Location} from "@angular/common";
import { Time } from "@angular/common";
import { Qoqa } from './qoqa';

export class Event {
  title: string;
  eventID: string;
  organizer: User;
  host: User;
  location: Location;
  time: Time;
  qoqas: Qoqa;
  attendees: User[];
}
