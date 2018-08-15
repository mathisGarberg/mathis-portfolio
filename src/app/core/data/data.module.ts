import { NgModule, ModuleWithProviders  } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SkillService } from './skill.service';
import { StoryService } from './story.service';
import { ProjectService } from './project.service';
import { SectionService } from './section.service';

// mocks

@NgModule({
    imports: [
        CommonModule
    ],
    providers: [
        SkillService,
        StoryService,
        ProjectService,
        SectionService
    ],
})
export class DataModule {
    static forRoot(): ModuleWithProviders {
        return <ModuleWithProviders> {
            ngModule: DataModule,
            providers: [
                SkillService,
                StoryService,
                ProjectService,
                SectionService
            ],
        };
    }
 }