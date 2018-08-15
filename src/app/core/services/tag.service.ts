import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError,  } from 'rxjs/operators';

const routes = {
  tags: `/tags`,
  tag: (id: string) => { return `/tag/${id}` }
};

@Injectable()
export class TagService {

  constructor(private httpClient: HttpClient) { }

  getTags(id: string): Observable<[string]> {
    return this.httpClient
      .get(routes.tag(id))
      .pipe(
        map((body: any) => body),
        catchError(() => of('Error, could not load data'))
      );
  }

}
