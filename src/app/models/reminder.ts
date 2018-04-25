import { FormizableBase } from './../formizable/formizable-base';
import { FormizableProperty } from '../formizable/annotation/formizable-property';

export class Reminder extends FormizableBase {
  @FormizableProperty({label: 'Rappel moi de '})
  what: string;
  @FormizableProperty({label: 'Le'})
  remind: Date;
}
