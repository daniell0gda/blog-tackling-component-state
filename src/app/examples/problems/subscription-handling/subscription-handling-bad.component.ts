import {Component, OnDestroy} from '@angular/core';
import {Subject, Subscription, timer} from 'rxjs';
import {takeUntil, tap} from 'rxjs/operators';

@Component({
    selector: 'subscription-handling-bad',
    template: `
   <h1>Subscription Handling</h1>
  `
})
export class SubscriptionHandlingBadComponent implements OnDestroy {
    onDestroy$ = new Subject();

    sideEffect$ = timer(0, 1000).pipe(tap(console.log));

    constructor() {
        this.sideEffect$
            .pipe(takeUntil(this.onDestroy$))
            .subscribe();
    }

    ngOnDestroy(): void {
        this.onDestroy$.next(true);
    }
}

@Component({
    selector: 'subscription-handling-bad-v2',
    template: `
   <h1>Subscription Handling</h1>
  `
})
export class SubscriptionHandlingBadV2Component implements OnDestroy {
    subscription = new Subscription();

    sideEffect$ = timer(0, 1000).pipe(tap(console.log));

    constructor() {
        this.subscription
            .add(this.sideEffect$.subscribe());
    }

    ngOnDestroy(): void {
        this.subscription.unsubscribe();
    }
}

@Component({
    selector: 'subscription-handling-bad-v3',
    template: `
   <h1>Subscription Handling</h1>
  `
})
export class SubscriptionHandlingBadV3Component implements OnDestroy {
    sideEffect$ = timer(0, 1000).pipe(tap(console.log));

    constructor() {
        this.sideEffect$.subscribe();
    }

    ngOnDestroy(): void {

    }
}
