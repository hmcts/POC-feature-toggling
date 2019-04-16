import {Component, OnInit} from '@angular/core';
import {AppConfigService} from '../../../app/services/configuration.services';
import {ConfigurationModel} from '../../../app/models/configuration.model';

/**
 * Bootstraps the Cases Components
 */
@Component({
  selector: 'app-cases-component',
  template: `
    <h1>List of cases</h1>
    <div *featureToggle="'featureOne'">Feature one</div>
    <div *featureToggle="'featureTwo'">Feature two</div>
    <div *featureToggle="'featureThree'">Feature three</div>
  `,
})
export class CasesComponent implements OnInit {
  constructor(private appConfigService: AppConfigService) {}

  config: ConfigurationModel;

  ngOnInit(): void {
    this.config = this.appConfigService.getFeatureToggle();
  }
}

