import { FormizableBase } from '../formizable/formizable-base';
import { FormizableProperty } from '../formizable/annotation/formizable-property';
import { Tag } from './tag';
import { missionCodeValidator } from '../shared/validators/mission-code.validator';
import { Place } from './place';

export class Mission extends FormizableBase {

  @FormizableProperty()
  public name: string;

  @FormizableProperty({
    required: false,
    validators: [missionCodeValidator()],
    validationMessage: 'Mission code is wrong it should be 4 HEX digits',
    maxLength: 4,
  })
  public code: string;

  @FormizableProperty({
    label: 'start date'
  })
  public startDate: Date;

  @FormizableProperty({
    options: [
      new Tag('Dangerous'),
      new Tag('Crazy'),
      new Tag('Whormhole'),
      new Tag('Alien')
    ],
  })
  public tags: Tag[];

  @FormizableProperty({
    label: 'The place we are headed to'
  })
  public place: Place;

  constructor(
    name?: string,
    startDate?: Date,
    tags?: Tag[]
  ) {
    super();
    this.name = name;
    this.startDate = startDate;
    this.tags = tags;
  }
}
