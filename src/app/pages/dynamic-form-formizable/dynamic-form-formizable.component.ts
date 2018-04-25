import { Component, OnInit } from '@angular/core';
import { QuestionBase } from '../../formizable/question/question-base';
import { IFormizable } from '../../formizable/interface/iformizable-base';
import { Meetup } from '../../models/meetup';
import { Mission } from '../../models/mission';
import { Place } from '../../models/place';
import { Note } from '../../models/note';
import { Astronaute } from './../../models/astronaute';

@Component({
  selector: 'app-dynamic-form-formizable',
  templateUrl: './dynamic-form-formizable.component.html',
  styleUrls: ['./dynamic-form-formizable.component.scss']
})
export class DynamicFormFormizableComponent implements OnInit {
  questions: QuestionBase<any>[];
  createModel: IFormizable;
  missions: Mission[] = [];
  places: Place[] = [];
  notes: Note[] = [];
  astronautes: Astronaute[] = [];

  public open = false;
  public spin = true;
  public direction = 'right';
  public animationMode = 'fling';

  constructor() { }

  ngOnInit() { }

  onSubmit(obj: any) {
    switch (obj.constructor.name) {
      // case 'Place':
      //   if (this.places.indexOf(obj) < 0) {
      //     this.places.push(obj);
      //   }
      //   break;
      // case 'Mission':
      //   if (this.missions.indexOf(obj) < 0) {
      //     // not an edit must create
      //     this.missions.push(obj);
      //   }
      //   break;
      // case 'Note':
      //   if (this.notes.indexOf(obj) < 0) {
      //     this.notes.push(obj);
      //   }
      //   break;
      // case 'Astronaute':
      //   if (this.astronautes.indexOf(obj) < 0) {
      //     this.astronautes.push(obj);
      //   }
      //   break;
    }
    this.createModel = undefined;
  }

  create(type: string) {
    switch (type) {
      // case 'place':
      //   this.createModel = new Place();
      //   break;
      // case 'mission':
      //   this.createModel = new Mission();
      //   break;
      // case 'note':
      //   this.createModel = new Note();
      //   break;
      // case 'astronaute':
      //   this.createModel = new Astronaute();
      //   break;
    }
  }

  edit(model: IFormizable) {
    this.createModel = model;
  }
}
