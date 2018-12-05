import { Component, OnInit } from '@angular/core';
import { User } from '../data/user';
import { Router } from "@angular/router";
import { Organization } from "../data/organization";
import { Individual } from "../data/individual";
import { AngularFireDatabase } from 'angularfire2/database';
import { MiddlewareService } from "../services/middleware.service";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  user = new User();
  email = '';
  firstName = '';
  lastName = '';
  title = '';
  orgTruth = false;
  organization = new Organization();
  individual = new Individual();
  phoneNumber = '';
  dob = '';
  address = '';
  invalidEntry = false;

  constructor(public database: AngularFireDatabase, private data: MiddlewareService, private router: Router) {
  }

  ngOnInit() {
  }
  saveChanges() {
    this.invalidEntry = false;
    var user = new User;
    user.uid = sessionStorage.getItem('uid');
    console.log(user.uid);
    this.data.getUser(user.uid, (user) => {
      console.log(user);
      this.user = user
    });
    console.log(this.user.uid);
    user.phoneNumber = this.user.phoneNumber;
    user.email = this.user.email;
    console.log(this.orgTruth); //displays toggle truth
    user.organization = this.orgTruth;
    console.log(user.organization); //organizer truth for user
    user.email = this.email;
    user.phoneNumber = this.phoneNumber;
    user.eventHistory = [];
    console.log('finished prepopulation');
    if (this.organization) {
      console.log('inside if!');
      this.data.MakeUserOrganization(user.uid, user.email, user.phoneNumber, user.eventHistory);
      var organization = new Organization();
      this.data.getOrganization(user.uid, (organization) => {
        console.log(organization);
        this.organization = organization;
      });
      organization.title = this.title;
      organization.email = this.email;
      organization.address = this.address;
      organization.phoneNumber = this.phoneNumber;
      this.invalidEntry = (organization.title || organization.email || organization.address || organization.phoneNumber) === ('' || ' ');
      if (this.invalidEntry) {
        //do not save
      } else {
        sessionStorage.setItem('isOrg', '1');
        this.data.DeleteUser(user);
        this.router.navigate(['/home']);
      }
    } else {
      console.log('inside else!');
      this.data.MakeUserIndividual(user);
      var individual = new Individual();
      this.data.getIndividual(user.uid, (individual) => {
        console.log(individual);
        this.individual = individual;});
      individual.firstName = this.firstName;
      individual.lastName = this.lastName;
      individual.dob = this.dob;
      individual.phoneNumber = this.phoneNumber;
      individual.email = this.email;
      this.invalidEntry = (individual.firstName || individual.email || individual.lastName || individual.phoneNumber || individual.dob) === ('' || ' ');
      if (this.invalidEntry) { //do not save
      } else {
        sessionStorage.setItem('isOrg', '0');
        this.data.DeleteUser(user);
        this.router.navigate(['/home']);
      }
    }
  }
  cancelChanges() { this.router.navigate(['/home']); }
}
