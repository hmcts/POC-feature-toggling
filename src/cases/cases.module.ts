import {NgModule} from '@angular/core';

import {CommonModule} from '@angular/common';
import {casesRouting} from './cases.routing';


// containers
import * as fromContainers from './containers';

// components
import * as fromComponent from './components';


import {StoreModule} from '@ngrx/store';
import {EffectsModule} from '@ngrx/effects';

import { reducers, effects } from './store';
import {HttpClientModule} from '@angular/common/http';
import {HmctsFormBuilderModule} from '../../projects/hmcts-form-builder/src/lib/hmcts-form-builder.module';


@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    HmctsFormBuilderModule,
    casesRouting,
    StoreModule.forFeature('cases', reducers),
    EffectsModule.forFeature(effects),
  ],
  exports: [...fromContainers.containers, ...fromComponent.components],
  declarations: [...fromContainers.containers, ...fromComponent.components],
})

/**
 * Entry point to RegisterModule
 */

export class CasesModule {

}
