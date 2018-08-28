import { Component, OnInit } from '@angular/core';
import { map, finalize, takeUntil } from 'rxjs/operators';
import { Observable, Subject } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import {
  animate,
  query,
  stagger,
  style,
  transition,
  trigger,
} from '@angular/animations';

import { environment as env } from '@env/environment';
import {
  ROUTE_ANIMATIONS_ELEMENTS ,
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
  private unsubscribe$: Subject<void> = new Subject<void>();

  routeAnimationsElements = ROUTE_ANIMATIONS_ELEMENTS;
  versions = env.versions;

  isLoading = true;
  projects$: Observable<Project[]>;
  sections$: Observable<any>;

  constructor(
    private route: ActivatedRoute,
    private projectService: ProjectService,
    private sectionService: SectionService,
  ) {}

  ngOnInit() {
    this.loadProjects();
    this.loadSections();
  }
  
  ngOnDestroy(): void {
    this.unsubscribe$.complete();
    this.unsubscribe$.unsubscribe();
  }

  loadProjects() {
    this.projects$ = this.projectService
      .getByCategory(this.route.snapshot.paramMap.get('category'))
      .pipe(
        finalize(() => this.isLoading = false),
        takeUntil(this.unsubscribe$),
        map(projects => {
          return projects;
        })
      );
  }

  loadSections() {
    this.sections$ = this.sectionService
      .getLinks()
      .pipe(
        map(sections => sections)
      );
  }

  openLink(link: string) {
    window.open(link, '_blank');
  }
}