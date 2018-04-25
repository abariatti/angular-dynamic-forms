import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user';
import { QuestionBase } from '../../formizable/question/question-base';
import { FormBuilder, FormGroup, FormControl, Validators, FormArray, FormGroupDirective } from '@angular/forms';
import { TextboxQuestion } from '../../formizable/question/question-textbox';
import { DropdownQuestion, DropdownQuestionOptions } from '../../formizable/question/question-dropdown';
import { ToggleQuestion } from '../../formizable/question/question-toggle';

@Component({
  selector: 'app-dynamic-form-generator',
  templateUrl: './dynamic-form-generator.component.html',
  styleUrls: ['./dynamic-form-generator.component.scss']
})
export class DynamicFormGeneratorComponent implements OnInit {
  questions: QuestionBase<any>[] = [];
  formGeneratorFormGroup: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.formGeneratorFormGroup = this.formBuilder.group({
      type: new FormControl('', [Validators.required]),
      key: new FormControl('', [Validators.required]),
      label: new FormControl('', [Validators.required]),
      required: new FormControl(''),
      options: this.formBuilder.array([])
    });
  }

  addOption() {
    const options = <FormArray>this.formGeneratorFormGroup.controls['options'];
    options.push(new FormGroup({ 'key': new FormControl('', [Validators.required]), 'value': new FormControl('', [Validators.required]) }));
  }

  onSubmitQuestion(formGeneratorDirective: FormGroupDirective) {
    const question = this.formGeneratorFormGroup.value;
    const options = {
      key: question.key,
      label: question.label,
      required: question.required,
      order: 1,
      validators: undefined,
      validationMessage: undefined,
      options: question.options,
    };

    if (this.questions.find(q => q.key === question.key)) {
      // duplicate
      alert('Key: ' + question.key + ' exists already!');

      return;
    }

    if (this.formGeneratorFormGroup.valid) {
      switch (question.type) {
        case 'textbox':
          this.questions.push(new TextboxQuestion(options));
          break;
        case 'dropdown':
          this.questions.push(new DropdownQuestion(options as DropdownQuestionOptions<any>));
          break;
        case 'toggle':
          this.questions.push(new ToggleQuestion(options));
          break;
      }

      formGeneratorDirective.resetForm();
    }
  }

  onFormSubmit(value) {
    alert(JSON.stringify(value));
  }
}
