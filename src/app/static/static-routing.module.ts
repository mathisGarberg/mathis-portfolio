import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AboutComponent } from './about/about.component';
import { ProjectsComponent } from './projects/projects.component';
import { ProjectComponent } from './project/project.component';
import { StoriesComponent } from './stories/stories.component';

const routes: Routes = [
  {
    path: 'about',
    component: AboutComponent,
    data: { title: 'anms.menu.about' }
  },
  {
    path: 'projects',
    component: ProjectsComponent,
    data: { title: 'anms.menu.projects' }
  },
  {
    path: 'project/:id',
    component: ProjectComponent,
    data: { title: 'anms.menu.project' }
  },
  {
    path: 'stories',
    component: StoriesComponent,
    data: { title: 'anms.menu.stories' }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StaticRoutingModule {}