// routes
import {RouterModule, Routes} from '@angular/router';
import {ModuleWithProviders} from '@angular/core';
import {CasesComponent} from './containers';

export const ROUTES: Routes = [
  {
    path: 'cases',
    component: CasesComponent,
  }
];

export const casesRouting: ModuleWithProviders = RouterModule.forChild(ROUTES);
