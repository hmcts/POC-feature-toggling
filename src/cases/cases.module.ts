import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {StoreModule} from '@ngrx/store';
import {HttpClientModule} from '@angular/common/http';
import {ProvidersModule} from '../app/providers/providers.module';
import { reducer } from './store';

// containers
import * as fromContainers from './containers';

// components
import * as fromComponent from './components';

// routes
import {casesRouting} from './cases.routing';

// directives
import * as fromDirectives from '../app/directives';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    casesRouting,
    StoreModule.forFeature('cases', reducer),
    ProvidersModule
    // EffectsModule.forFeature(effects),
  ],
  exports: [...fromContainers.containers, ...fromComponent.components],
  declarations: [...fromContainers.containers, ...fromComponent.components,  ...fromDirectives.directives,],
})

/**
 * Entry point to CasesModule
 */

export class CasesModule {

}
