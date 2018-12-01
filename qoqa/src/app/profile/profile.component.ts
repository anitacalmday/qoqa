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

  ngOnInit() {
  }

  constructor(private database: AngularFireDatabase, private data: MiddlewareService) {
    this.user = this.data.getUser();
    // saveChanges(this.user);
  }

  saveChanges(user: User) {
    // this.user.phoneNumber = '614-499-1587';
    if (this.user.organization) {
      this.data.MakeUserOrganization(user);
      var organization = this.data.getOrganization();
      this.data.UpdateOrganization(organization);
    } else {
      this.data.MakeUserIndividual(user);
      var individual = this.data.getIndividual();
      this.data.UpdateIndividual(individual);
    }
  }

}
