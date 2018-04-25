import { Role } from './role';
import { FormizableBase } from '../formizable/formizable-base';
import { FormizableProperty } from '../formizable/annotation/formizable-property';
import { Tag } from './tag';

export class Meetup extends FormizableBase {

  @FormizableProperty()
  public name: string;

  @FormizableProperty({
    options: [
      new Tag('Tech'),
      new Tag('Lifestyle'),
      new Tag('Sports'),
      new Tag('Food')
    ],
  })
  public tags: Tag[];

  constructor(
    name?: string,
    tags?: Tag[]
  ) {
    super();
    this.name = name;
    this.tags = tags;
  }
}
