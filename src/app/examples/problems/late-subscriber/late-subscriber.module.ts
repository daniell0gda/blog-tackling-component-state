import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LateSubscribersContainerComponent} from "./late-subscriber.container.component";
import {LateSubscriberDisplayComponent} from "./late-subscriber.display.component";
import {LateSubscriberBadDisplayComponent} from "./late-subscriber-bad.display.component";
import {MatCardModule} from "@angular/material";

export const ROUTES = [
    {
        path: '',
        component: LateSubscribersContainerComponent
    }
];
const DECLARATIONS = [
    LateSubscribersContainerComponent, LateSubscriberDisplayComponent,
    LateSubscriberBadDisplayComponent
];
@NgModule({
    declarations: [DECLARATIONS],
    imports: [
        CommonModule,
        MatCardModule
    ],
  exports: [DECLARATIONS]
})
export class LateSubscriberModule {

}
