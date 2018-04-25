import { ValidatorFn, AbstractControl } from '@angular/forms';

const CH_PHONE_NUMBER_REGEXP = '^(?:(?:|0{1,2}|\\+{0,2})41(?:|\\(0\\))|0)([1-9]\\d)(\\d{3})(\\d{2})(\\d{2})$';

// VALID
// -----
// 0783268674
// 41783268674
// 041783268674
// 0041783268674
// +41783268674
// ++41783268674
// ++41(0)783268674

// INVALID
// -------
// 783268674
// 00783268674
// 1783268674
// +041783268674
// 00041783268674
// +++41783268674
// 04178326867
// (0)783268674
// ++410783268674

export function phoneNumberValidator(): ValidatorFn {
    return (control: AbstractControl): {[key: string]: any} => {
      const allowed = control.value ? new RegExp(CH_PHONE_NUMBER_REGEXP).test(control.value) : true;
      return allowed ? null : {'forbidden': {value: control.value}};
    };
  }
