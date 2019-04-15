import {Component} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

/**
 * Bootstraps the Cases Components
 */

@Component({
  selector: 'app-cases-component',
  template: `<h1>cases compoent</h1>`,
})
export class CasesComponent {

  constructor(
    private route: ActivatedRoute,
    private router: Router,) {}
}

