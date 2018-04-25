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

@Injectable()
export class DynamicFormExampleService {

  // Todo: get from a remote source of question metadata
  // Todo: make asynchronous

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
      new GroupQuestion({
        key: 'group',
        label: 'Test question group',
        order: 3,
        questions: [
          new DropdownQuestion({
            key: 'subrole',
            required: true,
            label: 'Please enter your sub role',
            multiple: true,
            options: [
              { key: new Role(1, 'Buyer'), value: 'Buyer' },
              { key: new Role(2, 'Seller'), value: 'Seller' },
            ],
            order: 1
          }),
          new TextboxQuestion({
            key: 'submobile',
            label: 'Please Enter your sub phone number',
            order: 3,
            validators: [phoneNumberValidator()],
            validationMessage: 'Phone number should be in a swiss format'
          }),
          new GroupQuestion({
            key: 'subgroup',
            label: 'Test question sub group yahouuu',
            order: 7,
            questions: [
              new DropdownQuestion({
                key: 'subrole',
                required: true,
                label: 'Please enter your sub role',
                multiple: true,
                options: [
                  { key: new Role(1, 'Buyer'), value: 'Buyer' },
                  { key: new Role(2, 'Seller'), value: 'Seller' },
                ],
                order: 1
              })
            ]})
        ]
      }),

      // new TextboxQuestion({
      //   key: 'mobile',
      //   label: 'Please Enter your phone number',
      //   type: 'text',
      //   order: 3,
      //   validators: [phoneNumberValidator()],
      //   validationMessage: 'Phone number should be in a swiss format'
      // }),

      // new DropdownQuestion({
      //   key: 'role',
      //   required: true,
      //   label: 'Please enter your role',
      //   multiple: true,
      //   options: [
      //     { key: new Role(1, 'Buyer'), value: 'Buyer' },
      //     { key: new Role(2, 'Seller'), value: 'Seller' },
      //   ],
      //   order: 4
      // }),

      // new ToggleQuestion({
      //   key: 'newsletter',
      //   label: 'Subscribe to our newsletter?',
      //   order: 5
      // }),


      // new TextboxQuestion({
      //   key: 'code',
      //   label: 'Enter mission code',
      //   required: true,
      //   type: 'text',
      //   order: 6,
      //   validators: [missionCodeValidator()],
      //   validationMessage: 'Mission code invalid'
      // }),



    ];

    return questions.sort((a, b) => a.order - b.order);
  }
}
