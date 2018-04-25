import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'jsonPublic',
  pure: false
})
/**
 * Remove private (starting with _) members of objects
 * otherwise same as json pipe
 */
export class JsonPublicPipe implements PipeTransform {

  transform(value: any): string {
    return JSON.stringify(value, function(k, v) {
      if (k.indexOf('_') === 0) {
        return undefined;
      } else {
        return v;
      }
    }, 2);
  }
}
