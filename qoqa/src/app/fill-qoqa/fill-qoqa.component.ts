import { Component, OnInit } from '@angular/core';
import {MiddlewareService} from "../services/middleware.service";
import {Router} from "@angular/router";
import {Qoqa} from "../data/qoqa";

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
  qoqa = new Qoqa();
  constructor(private data: MiddlewareService, private router: Router) {
    this.fillForm(sessionStorage.getItem('qoqaID'));
  }

  ngOnInit() {
  }
  fillForm(qoqaID: string) {
    this.data.getQoqa(qoqaID, (qoqa) => {
      this.qoqa = qoqa;
      this.question1 = this.qoqa.questions[0].prompt;
      this.question2 = this.qoqa.questions[1].prompt;
      this.question3 = this.qoqa.questions[2].prompt;
      this.question4 = this.qoqa.questions[3].prompt;
      this.question5 = this.qoqa.questions[4].prompt;
      this.qoqa.questions[0].response.push(this.response1);
      this.qoqa.questions[1].response.push(this.response2);
      this.qoqa.questions[2].response.push(this.response3);
      this.qoqa.questions[3].response.push(this.response4);
      this.qoqa.questions[4].response.push(this.response5);
    })
  }

}
