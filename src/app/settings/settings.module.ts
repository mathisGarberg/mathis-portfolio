
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';

import { SharedModule } from '../shared';

import { settingsReducer } from './settings.reducer';

@NgModule({
  imports: [
    SharedModule,
    StoreModule.forFeature('settings', settingsReducer)
  ],
  declarations: []
})
export class SettingsModule {}