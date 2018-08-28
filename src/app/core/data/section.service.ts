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
                    link: '/projects/games'
                },
                {
                    id: 2,
                    name: 'Web Development',
                    link: '/projects/web-development'
                }
            ]
        },
        {
            title: 'Technologies',
            links: [
                {
                    id: 1,
                    name: 'AngularJS',
                    link: '/projects/angular-js'
                },
                {
                    id: 2,
                    name: 'Angular 2.x',
                    link: '/projects/angular-2x'
                },
                {
                    id: 1,
                    name: 'Vue',
                    link: '/projects/vue'
                },
                {
                    id: 2,
                    name: 'Vanilla JS',
                    link: '/projects/vanillajs'
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