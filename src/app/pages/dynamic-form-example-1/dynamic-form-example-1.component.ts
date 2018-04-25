import { QuestionControlService } from './../../formizable/question/question-control.service';
import { Component, OnInit } from '@angular/core';
import { QuestionBase } from '../../formizable/question/question-base';
import { Person } from '../../models/person';
import { Role } from '../../models/role';

@Component({
  selector: 'app-dynamic-form-example-1',
  templateUrl: './dynamic-form-example-1.component.html',
  styleUrls: ['./dynamic-form-example-1.component.scss']
})
export class DynamicFormExample1Component implements OnInit {
  questions: QuestionBase<any>[];
  person: Person;

  constructor() { }

  ngOnInit() {
    this.person = new Person();
    this.person.availableRolesProperty = [ new Role(1, 'role from property 1'),
                                 new Role(2, 'role from property 2') ];
    this.questions = this.person.generateQuestions();
  }

  onFormSubmit(obj: any) {
    alert(JSON.stringify(obj));
  }
}
