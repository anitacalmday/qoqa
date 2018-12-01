import { Component, OnInit } from '@angular/core';
import { MiddlewareService } from "../services/middleware.service";
import { AngularFireDatabase } from 'angularfire2/database';
import { Qoqa } from '../data/qoqa';

@Component({
  selector: 'app-create-qoqa',
  templateUrl: './create-qoqa.component.html',
  styleUrls: ['./create-qoqa.component.css']
})
export class CreateQoqaComponent implements OnInit {
  qoqa = new Qoqa;

  constructor(private database: AngularFireDatabase, private data: MiddlewareService) { }

  ngOnInit() { }

  CreateQoqa(qoqa: Qoqa): void { this.data.AddQoqa(qoqa); }

}
