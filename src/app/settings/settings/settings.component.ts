import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import {
    ActionSettingsChangeTheme,
    ActionSettingsChangeAutoNightMode,
    ActionSettingsPersist
} from '../settings.actions';

import {
    selectorSettings,
    SettingsState
} from '../settings.reducer';

@Component({
    selector: 'app-settings',
    templateUrl: './settings.component.html',
    styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit, OnDestroy {
    private unsubscribe$: Subject<void> = new Subject<void>();
    settings: SettingsState;

    themes = [
        { value: 'DEFAULT-THEME', label: 'blue' },
        { value: 'LIGHT-THEME', label: 'light' },
        { value: 'NATURE-THEME', label: 'nature' },
        { value: 'BLACK-THEME', label: 'dark' }
    ];

    constructor(private store: Store<any>) {
        store
          .select(selectorSettings)
          .pipe(takeUntil(this.unsubscribe$))
          .subscribe(settings => (this.settings = settings));
    }

    ngOnInit() {}

    ngOnDestroy(): void {
        this.unsubscribe$.next();
        this.unsubscribe$.complete();
    }

    onThemeSelect({ value: theme })  {
        this.store.dispatch(new ActionSettingsChangeTheme({ theme }));
        this.store.dispatch(new ActionSettingsPersist({ settings: this.settings }));
    }

    onAutoNightModeToggle({ checked: autoNightMode }) {
        this.store.dispatch(
          new ActionSettingsChangeAutoNightMode({ autoNightMode })
        );
        this.store.dispatch(new ActionSettingsPersist({ settings: this.settings }));
    }

}