import { Component, OnInit } from '@angular/core';

import { environment as env } from '@env/environment';
import {
  ROUTE_ANIMATIONS_ELEMENTS,
  StoryService,
  Story
} from '@app/core';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Component({
  selector: 'anms-stories',
  templateUrl: './stories.component.html',
  styleUrls: ['./stories.component.scss']
})
export class StoriesComponent implements OnInit {
  routeAnimationsElements = ROUTE_ANIMATIONS_ELEMENTS;
  versions = env.versions;

  stories$: Observable<Story[]>;

  constructor(
    private storyService: StoryService
  ) {}

  ngOnInit() {
    this.loadStories();
  }

  loadStories() {
    this.stories$ = this.storyService.getAll()
      .pipe(
        map(story => story)
      );
  }

}