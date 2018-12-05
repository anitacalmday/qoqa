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
  qoqaID = '';
  constructor(private data: MiddlewareService, private router: Router) {
    this.event = JSON.parse(sessionStorage.getItem('event'));
    this.title = this.event.title;
    console.log(this.event);
    this.data.getQoqas((qoqas) => {
      for(let qoqa of qoqas) {
        console.log('qoqa event id: ' + qoqa.eventID);
        if (qoqa.eventID === this.event.eventID) {
          console.log(qoqa.qoqaID);
          this.qoqaID = qoqa.qoqaID;
          this.fillForm(qoqa.qoqaID);
        }
      }
    });
    // this.fillForm(this.event.qoqas[0].qoqaID);
  }

  ngOnInit() {
  }
  fillForm(qoqaID: string) {
    this.data.getQuestions(qoqaID, (data) => {
      console.log(data[0].prompt);
      this.question1 = data[0].prompt;
      this.question2 = data[1].prompt;
      this.question3 = data[2].prompt;
      this.question4 = data[3].prompt;
      this.question5 = data[4].prompt;
    })
    this.title = this.event.title;
  }
  submit() {
    var responses = [];
    responses.push(this.response1);
    responses.push(this.response2);
    responses.push(this.response3);
    responses.push(this.response4);
    responses.push(this.response5);
    this.data.AddQoqaResponse(this.qoqaID, sessionStorage.getItem('uid'), responses);
    /*this.qoqa.questions[0].response.push(this.response1);
    this.qoqa.questions[1].response.push(this.response2);
    this.qoqa.questions[2].response.push(this.response3);
    this.qoqa.questions[3].response.push(this.response4);
    this.qoqa.questions[4].response.push(this.response5);*/
    this.router.navigate(['/home']);
  }
}
