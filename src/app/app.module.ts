import { BrowserModule } from '@angular/platform-browser';
import {APP_INITIALIZER, NgModule} from '@angular/core';

import { AppComponent } from './containers/app/app.component';

// ngrx modules - START
import {EffectsModule} from '@ngrx/effects';
import {MetaReducer, Store, StoreModule} from '@ngrx/store';
import {RouterStateSerializer, StoreRouterConnectingModule} from '@ngrx/router-store';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import {storeFreeze} from 'ngrx-store-freeze';
// ngrx modules - END
export const metaReducers: MetaReducer<any>[] = !environment.production
  ? [storeFreeze]
  : [];

import {environment} from '../environments/environment';
import {effects} from './store/effects';
import {CustomSerializer, reducers} from './store/reducers';
import {RouterModule} from '@angular/router';
import {ROUTES} from './app.routes';
import {CasesModule} from '../cases/cases.module';
import {initApplication} from './app-initilizer';



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CasesModule,
    RouterModule.forRoot(ROUTES),
    StoreModule.forRoot(reducers, { metaReducers }),
    EffectsModule.forRoot(effects),
    StoreRouterConnectingModule,
    StoreDevtoolsModule.instrument({
      logOnly: environment.production
    }),
  ],
  providers: [
    { provide: RouterStateSerializer, useClass: CustomSerializer },
    {
      provide: APP_INITIALIZER,
      useFactory: initApplication,
      deps: [Store],
      multi: true
    },
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
