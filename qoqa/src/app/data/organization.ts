import { User } from './user';
import { Event } from './events';
import { Location} from '@angular/common';
import { Qoqa } from './qoqa';

export class Organization {
  title: string;
  address: Location;
  upcomingEvent: Event[];
  qoqaHistory: Qoqa[];
}
