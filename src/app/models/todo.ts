 import { FormizableBase } from '../formizable/formizable-base';
import { FormizableProperty } from '../formizable/annotation/formizable-property';
import { Tag } from './tag';
import { Geo } from './geo';
import { Reminder } from './reminder';

export class Todo extends FormizableBase {

  @FormizableProperty()
  public todo: string;

  @FormizableProperty()
  public done: boolean;

  @FormizableProperty({}, Reminder)  
  public reminders: Reminder[];

  constructor(
    todo?: string,
    done?: boolean,
  ) {
    super();
    this.todo = todo;
    this.done = done;
  }
}
