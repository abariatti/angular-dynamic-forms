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
      new Role(1, 'Captain'),
      new Role(2, 'Lieutenant'),
      new Role(3, 'Caporal'),
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
      new Role(1, 'Captain'),
      new Role(2, 'Lieutenant'),
      new Role(3, 'Caporal'),
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
