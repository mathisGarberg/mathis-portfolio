import browser from 'browser-detect';
import { Component, HostBinding, OnDestroy, OnInit } from '@angular/core';
import { ActivationEnd, Router, NavigationEnd } from '@angular/router';
import { OverlayContainer } from '@angular/cdk/overlay';
import { Store } from '@ngrx/store';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import {
  AnimationsService,
  routeAnimations
} from '@app/core';

import { environment as env } from '@env/environment';

import {
  SettingsState,
  selectorSettings,
  NIGHT_MODE_THEME,
  ActionSettingsChangeAnimationsPageDisabled
} from './settings';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [routeAnimations]
})
export class AppComponent implements OnInit {
  private unsubscribe$: Subject<void> = new Subject<void>();

  @HostBinding('class') componentCssClass;
  
  isProd = env.production;
  envName = env.envName;
  version = env.versions.app;
  year = new Date().getFullYear();
  navigation = [
    { link: 'about', label: 'About' },
    { link: 'projects', label: 'Projects' },
    { link: 'stories', label: 'Stories' }
  ];
  navigationSideMenu = [
    ...this.navigation,
    { link: 'settings', label: 'anms.menu.settings' }
  ];

  settings: SettingsState;

  constructor(
    public overlayContainer: OverlayContainer,
    private store: Store<any>,
    private router: Router,
    private animationService: AnimationsService,
  ) {}

  private static isIEorEdge() {
    return ['ie', 'edge'].includes(browser().name);
  }

  ngOnInit(): void {
    this.subscribeToSettings();
  }

  ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }

  private subscribeToSettings() {
    if (AppComponent.isIEorEdge()) {
      this.store.dispatch(
        new ActionSettingsChangeAnimationsPageDisabled({
          pageAnimationsDisabled: true
        })
      );
    }
    this.store
      .select(selectorSettings)
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe(settings => {
        console.log(settings);
        this.setTheme(settings);
        this.animationService.updateRouteAnimationType(
          settings.pageAnimations,
          settings.elementsAnimations
        );
      });
  }

  private setTheme(settings: SettingsState) {
    const { theme, autoNightMode } = settings;
    const hours = new Date().getHours();
    const effectiveTheme = (autoNightMode && (hours >= 20 || hours <= 6)
      ? NIGHT_MODE_THEME
      : theme
    ).toLowerCase();
    this.componentCssClass = effectiveTheme;
  }

}
