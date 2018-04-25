import { ValidatorFn, AbstractControl } from '@angular/forms';

const MISSION_CODE_REGEXP = '^[0-9A-F]{4}$';

export function missionCodeValidator(): ValidatorFn {
    return (control: AbstractControl): {[key: string]: any} => {
      const allowed = control.value ? new RegExp(MISSION_CODE_REGEXP).test(control.value) : true;
      return allowed ? null : {'forbidden': {value: control.value}};
    };
  }
