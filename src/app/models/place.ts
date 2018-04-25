import { FormizableBase } from '../formizable/formizable-base';
import { FormizableProperty } from '../formizable/annotation/formizable-property';
import { FormizableType } from '../formizable/annotation/formizable-type';
import { Geo } from './geo';

export enum PlaceType {
  CITY,
  COUNTRY,
  SPOT,
  PLANET,
  EXOPLANET,
  GALAXY,
  STAR,
}

export class Place extends FormizableBase {

  @FormizableProperty()
  place: string;

  @FormizableProperty({
    options: [
      { key: PlaceType.CITY, value: 'City' },
      { key: PlaceType.COUNTRY, value: 'Country' },
      { key: PlaceType.SPOT, value: 'Spot' },
      { key: PlaceType.PLANET, value: 'Planet' },
      { key: PlaceType.EXOPLANET, value: 'Exo Planet' },
      { key: PlaceType.GALAXY, value: 'Galaxy' },
      { key: PlaceType.STAR, value: 'Star' },
    ],
  })
  type: { key: PlaceType, value: string };

  @FormizableProperty()
  localization: Geo;
}
