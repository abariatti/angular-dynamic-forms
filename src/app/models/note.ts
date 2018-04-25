import { FormizableBase } from '../formizable/formizable-base';
import { FormizableProperty } from '../formizable/annotation/formizable-property';
import { Tag } from './tag';
import { Todo } from './todo';

export class Note extends FormizableBase {

  @FormizableProperty()
  public title: string;

  @FormizableProperty({textArea: true})
  public note: string;

  @FormizableProperty({}, Todo)
  public todos: Todo[];

  constructor(
    title?: string,
    note?: string,
    todos?: Todo[]
  ) {
    super();
    this.title = title;
    this.note = note;
    this.todos = todos;
  }
}
