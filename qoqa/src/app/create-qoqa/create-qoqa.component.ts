import { Component, OnInit } from '@angular/core';
import { MiddlewareService } from "../services/middleware.service";
import { AngularFireDatabase } from 'angularfire2/database';
import { Qoqa } from '../data/qoqa';
import { Question } from "../data/question";
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-qoqa',
  templateUrl: './create-qoqa.component.html',
  styleUrls: ['./create-qoqa.component.css']
})
export class CreateQoqaComponent implements OnInit {
  qoqa = new Qoqa();
  q1 = new Question();
  q2 = new Question();
  q3 = new Question();
  q4 = new Question();
  q5 = new Question();
  question1 = '';
  question2 = '';
  question3 = '';
  question4 = '';
  question5 = '';
  qoqaCount = 0;
  eventID = '';
  title = '';


  constructor(private database: AngularFireDatabase, private data: MiddlewareService, private router: Router) {
    this.data.getQoqas((data) => {
      for(var i = 0; i<data.length; i++) {
        this.qoqaCount = this.qoqaCount + 1;
      }
    });
  }

  ngOnInit() { }

  createQoqa(): void {
    this.q1.prompt = this.question1;
    this.q2.prompt = this.question2;
    this.q3.prompt = this.question3;
    this.q4.prompt = this.question4;
    this.q5.prompt = this.question5;
    this.qoqa.qoqaID = this.qoqaCount.toString();
    this.qoqa.eventID = this.eventID;
    this.qoqa.title = this.title;
    this.qoqa.questions = [];
    console.log('question array: ' + this.qoqa.questions);
    this.qoqa.questions.push(this.q1);
    console.log('question array2: ' + this.qoqa.questions);
    this.qoqa.questions.push(this.q2);
    this.qoqa.questions.push(this.q3);
    this.qoqa.questions.push(this.q4);
    this.qoqa.questions.push(this.q5);
    this.data.AddQoqa(this.qoqa);
    this.router.navigate(['/home']);
  }

}
