import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

import { environment as env } from '@env/environment';
import {
  ROUTE_ANIMATIONS_ELEMENTS,
  ProjectService,
  SectionService,
  Project
} from '@app/core';

@Component({
  selector: 'anms-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
  routeAnimationsElements = ROUTE_ANIMATIONS_ELEMENTS;
  versions = env.versions;

  projects$: Observable<Project[]>;
  sections$: Observable<any>;

  constructor(
    private projectService: ProjectService,
    private sectionService: SectionService,
  ) {}

  ngOnInit() {
    this.loadProjects();
    this.loadSections();
  }

  loadProjects() {
    this.projects$ = this.projectService.getAll()
      .pipe(
        map(project => project)
      );
  }

  loadSections() {
    this.sections$ = this.sectionService.getLinks()
      .pipe(
        map(sections => sections)
      );
  }  

  openLink(link: string) {
    window.open(link, '_blank');
  }
}