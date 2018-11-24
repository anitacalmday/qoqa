import { User } from './user';
import { Event } from './events';

export class Individual {
  firstName: string;
  lastName: string;
  dob: string;
  saved_events: Event[];
  email: string;
}
