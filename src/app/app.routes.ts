import {Routes} from '@angular/router';

export const ROUTES: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/cases' },
  { path: '**', redirectTo: '/cases' }
];
