import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MetaReducer, StoreModule } from '@ngrx/store';

import { environment } from '@env/environment';

import { AnimationsService } from './animations/animations.service';

@NgModule({
    declarations: [],
    imports: [
        CommonModule,
        StoreModule.forRoot({}),
    ],
    exports: [],
    providers: [
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