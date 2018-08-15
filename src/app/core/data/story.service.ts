import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Story } from '../models/story.model';
import { stories } from '../json/stories.json';

let counter = 0;

@Injectable()
export class StoryService {

    private storyArray: any[];

    constructor() { }
  
    getAll(): Observable<Story[]> {
      return of(stories);
    }
  
    getArray(): Observable<any[]> {
      return of(stories);
    }
  
    getSingle(): Observable<Story> {
      counter = (counter + 1) % this.storyArray.length;
      return of(this.storyArray[counter]);
    }

}