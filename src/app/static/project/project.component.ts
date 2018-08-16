import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { environment as env } from '@env/environment';
import {
  ROUTE_ANIMATIONS_ELEMENTS,
  ProjectService,
  Project
} from '@app/core';
import { map } from 'rxjs/operators';

@Component({
  selector: 'anms-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent implements OnInit {
  routeAnimationsElements = ROUTE_ANIMATIONS_ELEMENTS;
  versions = env.versions;

  project: Project;

  constructor(
    private route: ActivatedRoute,
    private projectService: ProjectService
  ) {}

  ngOnInit() {
    this.loadProject();
  }

  loadProject() {
    this.projectService.getSingle(this.route.snapshot.paramMap.get('id')])
      .pipe(
        map(project => project)
      ).subscribe((project) => {
        this.project = project;
      });
  }

}