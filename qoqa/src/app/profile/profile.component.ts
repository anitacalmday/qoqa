import { Component, OnInit } from '@angular/core';
import { User } from '../data/user';
import { AngularFireDatabase } from 'angularfire2/database';
import { MiddlewareService } from "../services/middleware.service";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  user = new User;
  email = '';
  firstName = '';
  lastName = '';
  title = '';
  organization = false;
  phoneNumber = '';
  dob = '';
  address = '';
  invalidEntry = false;

  constructor(public database: AngularFireDatabase, private data: MiddlewareService) {
    // this.data.user.uid
  }

  ngOnInit() {
    //this.data.user = this.data.getUser();
  }
  // todo: fix saveChanges() call in profile.component.html
  saveChanges() {
    console.log('REACCHHEDDD SAVECHANGES!');
    this.invalidEntry = false;
    var user = new User;

    user.uid = sessionStorage.getItem('uid');
    console.log(user.uid);
    // console.log(this.data.user.uid)
    // user.uid = this.data.user.uid;
    this.data.getUser(user.uid, (user) => {
      console.log(user)
      this.user = user
    })
    // this.data.getUser(user.uid)
    console.log(this.user.uid);
    user.phoneNumber = this.user.phoneNumber;
    user.email = this.user.email;

    console.log(this.organization); //displays toggle truth

    user.organization = this.organization;
    console.log(user.organization); //organizer truth for user

    user.email = this.email;
    user.phoneNumber = this.phoneNumber;
    user.eventHistory = [];
    console.log('finished prepopulation');
    if (this.organization) {
      console.log('inside if!');
      this.data.MakeUserOrganization(user.uid, user.email, user.phoneNumber, user.eventHistory);
      var organization = this.data.getOrganization();
      organization.title = this.title;
      organization.email = this.email;
      organization.address = this.address;
      organization.phoneNumber = this.phoneNumber;
      this.invalidEntry = (organization.title || organization.email || organization.address || organization.phoneNumber) === ('' || ' ');
      if (this.invalidEntry) {
        //do not save
      } else {
        this.data.UpdateOrganization(organization);
      }
    } else {
      console.log('inside else!');
      this.data.MakeUserIndividual(user);
      var individual = this.data.getIndividual();
      individual.firstName = this.firstName;
      individual.lastName = this.lastName;
      individual.dob = this.dob;
      individual.phoneNumber = this.phoneNumber;
      individual.email = this.email;
      this.invalidEntry = (individual.firstName || individual.email || individual.lastName || individual.phoneNumber || individual.dob) === ('' || ' ');
      if (this.invalidEntry) {
        //do not save
      } else {
        this.data.UpdateIndividual(individual);
      }
    }
  }

}
