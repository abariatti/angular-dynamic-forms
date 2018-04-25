import { Role } from './role';
import { FormizableBase } from '../formizable/formizable-base';
import { FormizableProperty } from '../formizable/annotation/formizable-property';

export class Person extends FormizableBase {

  @FormizableProperty()
  public name: string;

  @FormizableProperty()
  public surname: string;

  @FormizableProperty({
    options: [
      new Role(1, 'Static Role 1'),
      new Role(2, 'Static Role 2'),
    ],
  })
  public roleWithStaticOptions: Role;

  @FormizableProperty({
    arrayOptionsPropertyOrMethodName: 'availableRolesProperty',
    required: false
  })
  public roleWithOptionsFromProperty: Role;

  @FormizableProperty({
    arrayOptionsPropertyOrMethodName: 'availableRolesMethod',
  })
  public roleWithOptionsFromMethod: Role;

  // example with property
  public availableRolesProperty: Role[];

  // example with method
  public availableRolesMethod(): Role[] {
    return [
      new Role(1, 'role from method 1'),
      new Role(2, 'role from method 2')
    ];
  }

  constructor(
    name?: string,
    surname?: string,
    availableRoles?: Role[]
  ) {
    super();
    this.name = name;
    this.surname = surname;
    this.availableRolesProperty = availableRoles;
  }
}
