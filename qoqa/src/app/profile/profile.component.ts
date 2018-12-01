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
  email: string;
  firstName: string;
  lastName: string;
  title: string;
  organization: boolean;
  phoneNumber: string;
  dob: string;
  address: string;
  invalidEntry = false;

  constructor(private database: AngularFireDatabase, private data: MiddlewareService) {
    this.user = this.data.getUser();
    // this.saveChanges(this.user);
  }

  ngOnInit() {
  }
  // todo: fix saveChanges() call in profile.component.html
  saveChanges(user: User) {
    // this.user.phoneNumber = '614-499-1587';
    console.log('REACCHHEDDD SAVECHANGES!');
    this.invalidEntry = false;
    this.user.organization = this.organization;
    this.user.email = this.email;
    this.user.phoneNumber = this.phoneNumber;
    if (this.user.organization) {
      this.data.MakeUserOrganization(user);
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
