import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

let counter = 0;

@Injectable()
export class SectionService {

    private sections = [
        {
            title: 'Category',
            links: [
                {
                    id: 1,
                    name: 'Games',
                    link: 'games'
                },
                {
                    id: 2,
                    name: 'Web Development',
                    link: 'web-development'
                }
            ]
        },
        {
            title: 'Technologies',
            links: [
                {
                    id: 1,
                    name: 'AngularJS',
                    link: ''
                },
                {
                    id: 2,
                    name: 'Angular 2.x',
                    link: ''
                },
                {
                    id: 1,
                    name: 'Vue',
                    link: ''
                },
                {
                    id: 2,
                    name: 'Vanilla JS',
                    link: ''
                }
            ]
        },
        {
            title: 'Tags',
            links: [
                {
                    id: 1,
                    name: 'Frontend',
                    link: 'angularjs'
                },
                {
                    id: 2,
                    name: 'Backend',
                    link: 'javascript'
                }
            ]
        }
    ];

    private sectionArray: any[];

    getLinks(): Observable<any> {
        return of(this.sections);
    }

    getLinkArray(): Observable<any[]> {
        return of(this.sectionArray);
    }

    getLink(): Observable<any> {
        counter = (counter + 1) % this.sectionArray.length;
        return of(this.sectionArray[counter]);
    }

}