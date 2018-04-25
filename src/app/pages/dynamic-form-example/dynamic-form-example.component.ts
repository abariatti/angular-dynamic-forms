import { Component, OnInit } from '@angular/core';
import { DynamicFormExampleService } from './dynamic-form-example.service';
import { Person } from '../../models/person';
import { Role } from '../../models/role';
import { QuestionBase } from '../../formizable/question/question-base';

@Component({
  selector: 'app-dynamic-form-example',
  templateUrl: './dynamic-form-example.component.html',
  styleUrls: ['./dynamic-form-example.component.scss'],
  providers: [ DynamicFormExampleService ]
})
export class DynamicFormExampleComponent implements OnInit {
  questions: QuestionBase<any>[];

  constructor(private dynamicFormExampleService: DynamicFormExampleService) { }

  ngOnInit() {
    this.questions = this.dynamicFormExampleService.getQuestions();
  }

  onFormSubmit(obj: any) {
    alert(JSON.stringify(obj));        
  }
}
