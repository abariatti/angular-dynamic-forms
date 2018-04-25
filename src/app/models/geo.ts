import { FormizableBase } from './../formizable/formizable-base';
import { FormizableProperty } from '../formizable/annotation/formizable-property';

export class Geo extends FormizableBase {
  @FormizableProperty()
  lat: number;
  @FormizableProperty()
  long: number;
  @FormizableProperty({
    required: false
  })
  gmap: string;
}
