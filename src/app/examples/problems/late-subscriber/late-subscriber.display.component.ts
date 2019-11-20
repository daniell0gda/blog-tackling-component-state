import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import {ReplaySubject, Subject} from 'rxjs';

@Component({
    selector: 'late-subscriber-display',
    template: `
    <h2>Late Subscriber Good</h2>
    <mat-card>
        <mat-card-header>state$:</mat-card-header>
        <mat-card-content>
            <pre>{{state$ | async | json}}</pre>
        </mat-card-content>
    </mat-card>
  `,
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LateSubscriberDisplayComponent {
    state$ = new ReplaySubject(1);

    constructor() {
    }

    @Input()
    set state(value) {
        this.state$.next({value});
    }

}
