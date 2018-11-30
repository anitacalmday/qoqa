import { Injectable } from '@angular/core';
import { Event } from '../data/events'
import { User } from '../data/user'
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';

@Injectable({
  providedIn: 'root'
})
export class MiddlewareService {

   events$: AngularFireList<Event>;
   users$: AngularFireList<User>

  constructor(private database: AngularFireDatabase) {}

  getEvents(onComplete) {
    this.events$ = this.database.list('events')
	  this.database.list('events').valueChanges().subscribe(data => {
      // console.log(data)
      onComplete(data)
  	},
    error => { console.log(error) });
  }

  AddEvent(event: Event): void {
    this.events$.push(event)
  }

  AddUser(user: User): void {
    this.users$.push(user)
  }

  AddUserWithID(uid: string) {
    var newUser = new User;
    newUser.uid = uid;
    this.users$.push(newUser)
  }

  UpdateUser(user: User): void {
    // this.database.object('/user/' + user.uid).update()
  }

  MakeUserOrganization(uid: string) {

  }

  MakeUserIndividual(uid: string) {

  }


  IsNewUser(uid: String, onComplete) {
    var found = true
    this.users$ = this.database.list('users')
    this.database.list('users').valueChanges().subscribe(data => {
      // console.log(data)
      for (var i = 0; i < data.length; i++) {
        // console.log(data[i])
        if (data[i]['uid'] == uid) {
          found = false
          // console.log('it is working it seems')
        }
        // console.log(data[i].uid)
        // console.log(uid)
      }
      onComplete(found)
    },
    error => { console.log(error) });
  }
}
