import { Directive, Input } from '@angular/core';
import { NG_VALIDATORS, Validator, AbstractControl } from '@angular/forms';
import { phoneNumberValidator } from './phone-number.validator';

@Directive({
    selector: '[appPhoneNumber]',
    providers: [{provide: NG_VALIDATORS, useClass: PhoneNumberValidatorDirective, multi: true}]
  })
  export class PhoneNumberValidatorDirective implements Validator {
    validate(control: AbstractControl): {[key: string]: any} {
      return phoneNumberValidator()(control);
    }
  }
