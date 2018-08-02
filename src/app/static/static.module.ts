import { NgModule } from '@angular/core';

import { SharedModule } from '@app/shared';

import { StaticRoutingModule } from './static-routing.module';
import { AboutComponent } from './about/about.component';
import { ProjectsComponent } from './projects/projects.component';
import { ProjectComponent } from './project/project.component';
import { StoriesComponent } from './stories/stories.component';

@NgModule({
  imports: [
      SharedModule,
      StaticRoutingModule
    ],
  declarations: [
      AboutComponent,
      ProjectsComponent,
      ProjectComponent,
      StoriesComponent
    ]
})
export class StaticModule {}