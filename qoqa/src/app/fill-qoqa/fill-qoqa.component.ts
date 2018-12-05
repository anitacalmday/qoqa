import { Component, OnInit } from '@angular/core';
import { MiddlewareService } from "../services/middleware.service";
import { Router } from "@angular/router";
import { Qoqa } from "../data/qoqa";
import { Event } from "../data/events";

@Component({
  selector: 'app-fill-qoqa',
  templateUrl: './fill-qoqa.component.html',
  styleUrls: ['./fill-qoqa.component.css']
})
export class FillQoqaComponent implements OnInit {
  question1 = '';
  question2 = '';
  question3 = '';
  question4 = '';
  question5 = '';
  response1 = '';
  response2 = '';
  response3 = '';
  response4 = '';
  response5 = '';
  title = '';
  qoqa = new Qoqa();
  event = new Event();
  constructor(private data: MiddlewareService, private router: Router) {
    this.event = JSON.parse(sessionStorage.getItem('event'));
    this.title = this.event.title;
    console.log(this.event);
    this.data.getQoqas((qoqas) => {
      for(let qoqa of qoqas) {
        console.log('qoqa event id: ' + qoqa.eventID);
        if (qoqa.eventID === this.event.eventID) {
          console.log(qoqa.qoqaID);
          this.fillForm(qoqa.qoqaID);
        }
      }
    });
    // this.fillForm(this.event.qoqas[0].qoqaID);
  }

  ngOnInit() {
  }
  fillForm(qoqaID: string) {
    this.data.getQoqa(qoqaID, (qoqa) => {
      this.qoqa = qoqa;
      console.log('qoqa object inside fillForm(): ' + qoqa);
      // Todo: fix line above! currently showing qoqa object not to be properly populated
      this.title = this.event.title;
      this.question1 = this.qoqa.questions[0].prompt;
      this.question2 = this.qoqa.questions[1].prompt;
      this.question3 = this.qoqa.questions[2].prompt;
      this.question4 = this.qoqa.questions[3].prompt;
      this.question5 = this.qoqa.questions[4].prompt;
    })
  }
  submit() {
    this.qoqa.questions[0].response.push(this.response1);
    this.qoqa.questions[1].response.push(this.response2);
    this.qoqa.questions[2].response.push(this.response3);
    this.qoqa.questions[3].response.push(this.response4);
    this.qoqa.questions[4].response.push(this.response5);
  }
}
