import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MetaReducer, StoreModule } from '@ngrx/store';
import { storeFreeze } from 'ngrx-store-freeze';
import { EffectsModule } from '@ngrx/effects';

import { environment } from '@env/environment';

import { DataModule } from './data/data.module';

import { initStateFromLocalStorage } from './meta-reducers/init-state-from-local-storage.reducer';
import { LocalStorageService } from './local-storage/local-storage.service';
import { AnimationsService } from './animations/animations.service';

export const metaReducers: MetaReducer<any>[] = [initStateFromLocalStorage];

if (!environment.production) {
    metaReducers.unshift(storeFreeze);
}

const CORE_PROVIDERS = [
    ...DataModule.forRoot().providers,
];

@NgModule({
    declarations: [],
    imports: [
        CommonModule,
        
        StoreModule.forRoot({}, { metaReducers }),
        EffectsModule.forRoot([]),

    ],
    exports: [],
    providers: [
        ...CORE_PROVIDERS,
        LocalStorageService,
        AnimationsService
    ],
})
export class CoreModule {

    constructor(
        @Optional()
        @SkipSelf()
        parentModule: CoreModule) {
        if (parentModule) {
          throw new Error('CoreModule is already loaded. Import only in AppModule');
        }
    }

}