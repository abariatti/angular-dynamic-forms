import { Role } from './role';
import { FormizableBase } from '../formizable/formizable-base';
import { FormizableProperty } from '../formizable/annotation/formizable-property';

export class Astronaute extends FormizableBase {

  @FormizableProperty()
  public name: string;

  @FormizableProperty()
  public surname: string;

  @FormizableProperty({
    options: [
      new Role(1, 'Commander'),
      new Role(2, 'Payload commander'),
      new Role(3, 'Science Pilot'),
      new Role(3, 'Pilot'),
    ],
  })
  public role: Role;



  constructor(
    name?: string,
    surname?: string,
    role?: Role,
  ) {
    super();
    this.name = name;
    this.surname = surname;
    this.role = role;
  }
}
