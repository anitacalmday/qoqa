import { Event } from './events';
import { Question } from './question';

export class Qoqa {
  title: string;
  qoqaID: string;
  eventID: string;
  questions: Question[];
}
