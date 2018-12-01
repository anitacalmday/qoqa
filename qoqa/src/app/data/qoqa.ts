import { Event } from './events';
import { Question } from './question';

export class Qoqa {
  constructor() { }
  title: string;
  qoqaID: string;
  eventID: string;
  questions: Question[];
}
