import {NgModule} from '@angular/core';

import {CommonModule} from '@angular/common';
import {casesRouting} from './cases.routing';


// containers
import * as fromContainers from './containers';

// components
import * as fromComponent from './components';

import {StoreModule} from '@ngrx/store';
import {EffectsModule} from '@ngrx/effects';

import { reducer } from './store';
import {HttpClientModule} from '@angular/common/http';


@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    casesRouting,
    StoreModule.forFeature('cases', reducer),
    // EffectsModule.forFeature(effects),
  ],
  exports: [...fromContainers.containers, ...fromComponent.components],
  declarations: [...fromContainers.containers, ...fromComponent.components],
})

/**
 * Entry point to CasesModule
 */

export class CasesModule {

}
