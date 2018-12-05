import { Injectable } from '@angular/core';
import { Event } from '../data/events';
import { User } from '../data/user';
import { Individual } from "../data/individual";
import { Organization } from "../data/organization";
import { Qoqa } from '../data/qoqa';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';

@Injectable({
  providedIn: 'root'
})
export class MiddlewareService {
  public user: User;
  public individual: Individual;
  public organization: Organization;
  public event: Event;
  public qoqa: Qoqa;

  constructor(public database: AngularFireDatabase) {}

  AddUser(user: User): void { this.database.list('/users/').set(user.uid, user); }

  AddIndividualUser(user: Individual): void { this.database.list('/users/individuals/').set(user.uid, user); }

  AddOrganizationUser(user: Organization): void { this.database.list('/users/organizations/').set(user.uid, user); }

  AddEvent(event: Event): void { this.database.list('/events/').set(event.eventID, event); }

  AddQoqa(qoqa: Qoqa): void { this.database.list('/qoqas/').set(qoqa.qoqaID, qoqa); }

  getEvents(onComplete) {
    this.database.list('/events/').valueChanges().subscribe(data => {
      // console.log(data)
      onComplete(data)
    },
    error => { console.log('problem loading event list ' + error) });
  }
  getEvent(eventId: String, onComplete) {
    this.database.list('/users/' + eventId).valueChanges().subscribe(data => {
        // console.log(data)
        onComplete(data)
      },
      error => { console.log('problem loading user list ' + error) });
  }
  getUser(uid: String, onComplete) {
    this.database.list('/users/' + uid).valueChanges().subscribe(data => {
      // console.log(data)
      onComplete(data)
    },
    error => { console.log('problem loading user list ' + error) });
  }
  getIndividual(uid: String, onComplete) {
    this.database.list('/users/individuals/' + uid).valueChanges().subscribe(data => {
      // console.log(data)
      onComplete(data)
    },
    error => { console.log('problem loading individual list ' + error) });
  }
  getOrganization(uid: String, onComplete) {
    this.database.list('/users/organizations/' + uid).valueChanges().subscribe(data => {
      // console.log(data)
      onComplete(data)
    },
    error => { console.log('problem loading organization list ' + error) });
  }
  getQoqa(qoqaId: String, onComplete) {
    this.database.list('/qoqas/' + qoqaId).valueChanges().subscribe(data => {
      // console.log(data)
      onComplete(data)
    },
    error => { console.log('problem loading qoqa list ' + error) });
  }

  addInvite(eventId: string, userId: string) {
    this.getIndividual(userId, (user) => {
      console.log(user);
      if (this.isEmptyObject(user)) {
        this.database.list('/users/organizations/' + userId + '/invitations').push(eventId)
      } else {
        this.database.list('/users/individuals/' + userId + '/invitations').push(eventId)
      }
    })
  }

  declineInvite(eventId: string, userId: string) {
    this.getIndividual(userId, (user) => {
      console.log(user);
      if (this.isEmptyObject(user)) {
        this.database.list('/users/organizations/' + userId + '/invitations').remove(eventId)
      } else {
        this.database.list('/users/individuals/' + userId + '/invitations').remove(eventId)
      }
    })
  }

  getInvites(userId: string, onComplete): string[] {
    var invitations = [];
    this.getIndividual(userId, (user) => {
      console.log(user);
      if (this.isEmptyObject(user)) {
        this.database.list('/users/organizations/' + userId + '/invitations').valueChanges().subscribe(data => {
            // console.log(data)
            invitations = data;
            onComplete(invitations);
          },
          error => { console.log('problem loading individual list ' + error) });
      } else {
        this.database.list('/users/individuals/' + userId + '/invitations').valueChanges().subscribe(data => {
            // console.log(data)
            invitations = data;
            onComplete(invitations);
          },
          error => { console.log('problem loading individual list ' + error) });
      }
    })
    return invitations;
  }

  isEmptyObject(obj): boolean {
    for(var prop in obj) {
      if (obj.hasOwnProperty(prop)) {
        return false;
      }
    } return true;
  }

  UpdateUser(user: User): void { this.database.list('/users/').update(user.uid, { 'email': user.email, 'phoneNumber': user.phoneNumber}); }

  UpdateIndividual(user: Individual): void { this.database.list('/users/individuals/').update(user.uid, user); }

  UpdateOrganization(user: Organization): void { this.database.list('/users/organizations/').set(user.uid, user); }

  UpdateEvent(event: Event): void { this.database.list('/events/').update(event.eventID, event); }

  UpdateQoqa(qoqa: Qoqa): void { this.database.list('/qoqas/').update(qoqa.qoqaID, qoqa); }

  DeleteUser(user: User): void { this.database.list('/users/' + user.uid).remove(); this.user = null; }

  DeleteIndividual(user: Individual): void { this.database.list('/users/individuals/' + user.uid).remove(); this.individual = null; }

  DeleteOrganization(user: Organization): void { this.database.list('/users/organizations/' + user.uid).remove(); this.organization = null; }

  DeleteEvent(event: Event): void { this.database.list('/events/' + event.eventID).remove(); this.event = null; }

  DeleteQoqa(qoqa: Qoqa): void { this.database.list('/qoqas/' + qoqa.qoqaID).remove(); this.qoqa = null; }

  getUserbyID(uid: string) { return this.database.list('/users/' + uid); }

  MakeUserOrganization(uid: string, email: string, phoneNumber: string, eventHistory: Event[]) {
    var organization = new Organization;
    organization.uid = uid;
    organization.email = email;
    organization.eventHistory = eventHistory;
    organization.phoneNumber = phoneNumber;
    organization.organization = true;
    console.log('Organization instance: ' + organization);
    this.AddOrganizationUser(organization);
    var user = new User;
    user.uid = uid;
    user.phoneNumber = phoneNumber;
    user.email = email;
    user.eventHistory = eventHistory;
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
    this.DeleteUser(user);
  }


  IsNewUser(uid: String, onComplete) {
    var found = false;
    this.getIndividual(uid, (user) => {
      console.log(user);
      if (this.isEmptyObject(user)) {
        this.getOrganization(uid, (user1) => {
          if (this.isEmptyObject(user1)) {
            onComplete();
          }
        });
        onComplete();
      } else {
        found = true;
      } onComplete(found);
    })
    /*this.database.list('users').valueChanges().subscribe(data => {
      // console.log(data)
      for (var i = 0; i < data.length; i++) {
        // console.log(data[i])
        if (data[i]['uid'] == uid) {
          found = true
          // console.log('it is working it seems')
        }
        // console.log(data[i].uid)
        // console.log(uid)
      }
      onComplete(found)
    },
    error => { console.log(error) });*/
  }
}
