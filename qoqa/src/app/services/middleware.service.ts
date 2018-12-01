import { Injectable } from '@angular/core';
import { Event } from '../data/events';
import { User } from '../data/user';
import { Individual } from "../data/individual";
import { Organization } from "../data/organization";
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';

@Injectable({
  providedIn: 'root'
})
export class MiddlewareService {
  user: User;
  individual: Individual;
  organization: Organization;
  event: Event;

  constructor(private database: AngularFireDatabase) {}

  getEvents(onComplete) {
	  this.database.list('/events').valueChanges().subscribe(data => {
      // console.log(data)
      onComplete(data)
  	},
    error => { console.log('problem loading event list ' + error) });
  }

  AddUser(user: User): void { this.database.list('/users/' + user.uid).set(user.uid, user); }

  AddIndividualUser(user: Individual): void { this.database.list('/users/individuals/' + user.uid).set(user.uid, user); }

  AddOrganizationUser(user: Organization): void { this.database.list('/users/organizations/' + user.uid).set(user.uid, user); }

  AddEvent(event: Event): void { this.database.list('/events/' + event.eventID).set(event.eventID, event); }

  setUser(user: User): void { this.user = user; }

  setIndividual(user: Individual): void { this.individual = user; }

  setOrganization(user: Organization): void { this.organization = user; }

  setEvent(event: Event): void { this.event = event; }

  getUser() { return this.user; }

  getIndividual() { return this.individual; }

  getOrganization() { return this.organization; }

  getEvent() { return this.event; }

  UpdateUser(user: User): void { this.database.list('/users/' + user.uid).update(user.uid, { 'email': user.email, 'phoneNumber': user.phoneNumber}); }

  UpdateIndividual(user: Individual): void { this.database.list('/users/individuals/' + user.uid).update(user.uid, user); }

  UpdateOrganization(user: Organization): void { this.database.list('/users/organizations/' + user.uid).update(user.uid, user); }

  UpdateEvent(event: Event): void { this.database.list('/events/' + event.eventID).update(event.eventID, event); }

  DeleteUser(user: User): void { this.database.list('/users/' + user.uid).remove(); }

  DeleteIndividual(user: Individual): void { this.database.list('/users/individuals/' + user.uid).remove(); }

  DeleteOrganization(user: Organization): void { this.database.list('/users/organizations/' + user.uid).remove(); }

  DeleteEvent(event: Event): void { this.database.list('/events/' + event.eventID).remove(); }

  getUserbyID(uid: string) { return this.database.list('/users/' + uid); }

  MakeUserOrganization(user: User) {
    var organization = new Organization;
    organization.uid = user.uid;
    organization.email = user.email;
    organization.eventHistory = user.eventHistory;
    organization.phoneNumber = user.phoneNumber;
    organization.organization = true;
    this.AddOrganizationUser(organization);
    this.setOrganization(organization);
    this.DeleteUser(user);
  }

  MakeUserIndividual(user: User) {
    var individual = new Individual;
    individual.uid = user.uid;
    individual.email = user.email;
    individual.eventHistory = user.eventHistory;
    individual.phoneNumber = user.phoneNumber;
    individual.organization = false;
    this.AddIndividualUser(individual);
    this.setIndividual(individual);
    this.DeleteUser(user);
  }


  IsNewUser(uid: String, onComplete) {
    var found = true
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
