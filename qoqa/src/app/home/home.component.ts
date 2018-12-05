import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { MiddlewareService } from '../services/middleware.service';
import { Router } from "@angular/router";
import {CdkTreeModule} from '@angular/cdk/tree';
import {MatTreeModule} from '@angular/material';

import { Event } from '../data/events';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  panelOpenState = false;
  events = null;

  constructor(private data: MiddlewareService, private router: Router) {
  	this.data.getEvents( (eventsList) => {
      console.log(eventsList)
      this.events = eventsList
    })
  }

  ngOnInit() {
  }

  // displayedColumns = [];
  
  CreateQoqa(){
  this.router.navigate(['create-qoqa'])
  }
}

