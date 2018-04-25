import { Injectable } from '@angular/core';
import { DropdownQuestion } from '../../formizable/question/question-dropdown';
import { QuestionBase } from '../../formizable/question/question-base';
import { TextboxQuestion } from '../../formizable/question/question-textbox';
import { Role } from '../../models/role';
import { User } from '../../models/user';
import { Validators } from '@angular/forms';
import { phoneNumberValidator } from '../../shared/validators/phone-number.validator';
import { ToggleQuestion } from '../../formizable/question/question-toggle';
import { missionCodeValidator } from '../../shared/validators/mission-code.validator';
import { GroupQuestion } from '../../formizable/question/question-group';
import { NumberQuestion } from '../../formizable/question/question-number';

@Injectable()
export class DynamicFormExampleService {

  public getQuestions() {

    const questions: QuestionBase<any>[] = [

      new TextboxQuestion({
        key: 'name',
        label: 'Enter your name',
        value: '',
        required: true,
        order: 1,
      }),
      new TextboxQuestion({
        key: 'email',
        label: 'Enter your email',
        required: true,
        order: 2,
        validators: [Validators.email],
        validationMessage: 'Email is invalid'
      }),

      new TextboxQuestion({
        key: 'mobile',
        label: 'Please Enter your phone number',
        order: 3,
        validators: [phoneNumberValidator()],
        validationMessage: 'Phone number should be in a swiss format'
      }),

      new DropdownQuestion({
        key: 'role',
        required: true,
        label: 'Please enter your role',
        options: [
          { key: new Role(1, 'Buyer'), value: 'Buyer' },
          { key: new Role(2, 'Seller'), value: 'Seller' },
        ],
        order: 4
      }),

      // new NumberQuestion({
      //   key: 'age',
      //   required: true,
      //   label: 'Please tel us your age',
      //   order: 5
      // }),

      // new ToggleQuestion({
      //   key: 'newsletter',
      //   required: true,
      //   label: 'Subscribe to our newsletter',
      //   order: 6
      // }),

      // new TextboxQuestion({
      //   key: 'life',
      //   textArea: true,
      //   label: 'Please Tell us about you',
      //   order: 7
      // }),


    ];

    return questions.sort((a, b) => a.order - b.order);
  }
}
