import {Component} from '@angular/core';
import {SubscriptionHandlingService} from './subscription-handling.service';

@Component({
    selector: 'subscription-handling-container',
    template: `
        <h1>Subscription Handling Overview</h1>
        <subscription-handling></subscription-handling>
        <subscription-handling-bad></subscription-handling-bad>
    `,
    providers: [SubscriptionHandlingService]
})
export class SubscriptionHandlingContainerComponent {

}
