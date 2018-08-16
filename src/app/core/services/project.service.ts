import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError,  } from 'rxjs/operators';
import { Project } from '@app/core/models';

const routes = {
  projects: `/api/projects`,
  project: (id: string) => `/api/projects/${id}`
};

@Injectable()
export class ProjectService {

  constructor(private httpClient: HttpClient) { }

  getAll(): Observable<Project[]> {
    return this.httpClient
      .get(routes.projects)
      .pipe(
        map((body: any) => body),
        catchError(() => of('Error, could not load data'))
      );
  }

  getSingle(id: string): Observable<Project> {
    return this.httpClient
      .get(routes.project(id))
      .pipe(
        map((body: any) => body),
        catchError(() => of('Error, could not load data'))
      );
  }

}
