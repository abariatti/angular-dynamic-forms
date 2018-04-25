import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { User } from '../../models/user';
import { Role } from '../../models/role';
import { phoneNumberValidator } from '../../shared/validators/phone-number.validator';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form-example.component.html',
  styleUrls: ['./reactive-form-example.component.scss']
})
export class ReactiveFormExampleComponent implements OnInit {
  userFormGroup: FormGroup;
  user: User = new User();
  roles: Role[] = [new Role(1, 'Buyer'), new Role(2, 'Seller')];

  constructor(private fromBuilder: FormBuilder) { }

  ngOnInit() {
    this.userFormGroup = this.fromBuilder.group({
      name: new FormControl('', [Validators.required, Validators.maxLength(10)]),
      email: new FormControl('', [Validators.required, Validators.email]),
      mobile: new FormControl('', [phoneNumberValidator()]),
      role: new FormControl([])
    });

    console.log(this.userFormGroup);
  }

  required(controlName) {
    if (this.userFormGroup.get(controlName).errors) {
      console.log(this.userFormGroup.get(controlName).errors);
    }
  }

  onSubmit() {
    alert(JSON.stringify(this.userFormGroup.value));
  }
}
