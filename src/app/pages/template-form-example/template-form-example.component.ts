import { Component, OnInit } from '@angular/core';
import { Role } from '../../models/role';
import { User } from '../../models/user';

@Component({
  selector: 'app-template-form-example',
  templateUrl: './template-form-example.component.html',
  styleUrls: ['./template-form-example.component.scss']
})
export class TemplateFormExampleComponent {

  user: User = new User();
  roles: Role[] = [new Role(1, 'Buyer'), new Role(2, 'Seller')];

  onSubmit() {
    alert(JSON.stringify(this.user));
  }

}
