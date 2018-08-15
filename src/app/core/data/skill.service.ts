import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Skill } from '../models/skill.model';

let counter = 0;

@Injectable()
export class SkillService {

  private skills: Skill[] = [
    {
      name: 'Designer',
      description: 'I value simple content structure, clean design patterns, and thoughtful interactions.'
    },
    {
      name: 'Fullstack Developer',
      description: 'I tend to code things from scratch, and enjoy bringing ideas to life in the browser.'
    }
  ];

  private skillArray: any[];

  constructor() { }

  getAll(): Observable<Skill[]> {
    return of(this.skills);
  }

  getArray(): Observable<any[]> {
    return of(this.skills);
  }

  getSingle(): Observable<Skill> {
    counter = (counter + 1) % this.skillArray.length;
    return of(this.skillArray[counter]);
  }

}
