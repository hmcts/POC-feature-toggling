import { Directive, Input, TemplateRef, ViewContainerRef, OnInit } from '@angular/core';
import {ConfigurationModel} from '../../models/configuration.model';

@Directive({
  selector: '[featureToggle]'
})
export class FeatureToggleDirective implements OnInit {
  @Input() featureKey: string;
  @Input() featureConfig: ConfigurationModel;

  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef
  ) {}

  ngOnInit() {
    if (this.isEnabled()) {
      this.viewContainer.createEmbeddedView(this.templateRef);
    } else {
      this.viewContainer.clear();
    }
  }

  isEnabled() {
    if (this.featureKey['*']) {
      return true;
    }
    return this.featureConfig[this.featureKey].isEnabled;
  }
}
