import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Project } from '../models/project.model';
import { projects } from '../json/projects.json';

let counter = 0;

@Injectable()
export class ProjectService {

    private projectArray: any[] = projects;

    constructor() { }
  
    getAll(): Observable<Project[]> {
      return of(projects);
    }
  
    getArray(): Observable<any[]> {
      return of(projects);
    }
  
    getSingle(id: number): Observable<Project> {
      counter = (counter + 1) % this.projectArray.length;
      return of(this.projectArray[counter]);
    }

}