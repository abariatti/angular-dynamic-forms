import { Component, OnInit } from '@angular/core';
import { Person } from '../../models/person';
import { Role } from '../../models/role';
import { QuestionBase } from '../../formizable/question/question-base';

@Component({
  selector: 'app-dynamic-form-example-2',
  templateUrl: './dynamic-form-example-2.component.html',
  styleUrls: ['./dynamic-form-example-2.component.scss']
})
export class DynamicFormExample2Component implements OnInit {
  questions: QuestionBase<any>[] = [];
  person: Person;

  constructor() { }

  ngOnInit() {
  }

  onTypeOfContactChange(typeOfContact) {
    if (typeOfContact === 'person') {
      this.person = new Person('', '', [new Role(1, 'role from property 1'), new Role(2, 'role from property 2')]);
      this.questions = this.person.generateQuestions();
    }
  }

  onFormSubmit(obj: any) {
    alert(JSON.stringify(obj));
  }
}
