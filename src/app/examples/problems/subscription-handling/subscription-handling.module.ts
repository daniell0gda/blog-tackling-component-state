import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SubscriptionHandlingComponent} from "./subscription-handling.component";
import {SubscriptionHandlingContainerComponent} from "./subscription-handling.container.component";
import {
  SubscriptionHandlingBadComponent,
  SubscriptionHandlingBadV2Component, SubscriptionHandlingBadV3Component
} from "./subscription-handling-bad.component";

export const ROUTES = [
  {
    path: '',
    component: SubscriptionHandlingContainerComponent
  }
];
const DECLARATIONS = [
    SubscriptionHandlingContainerComponent,
    SubscriptionHandlingComponent,
    SubscriptionHandlingBadComponent,
    SubscriptionHandlingBadV2Component,
    SubscriptionHandlingBadV3Component,
];
@NgModule({
  declarations: [DECLARATIONS],
  imports: [
    CommonModule
  ],
  exports: [DECLARATIONS]
})
export class SubscriptionHandlingModule { }
