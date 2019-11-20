import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import {Subject} from 'rxjs';

@Component({
    selector: 'late-subscriber-bad-display',
    template: `
    <h2>Late Subscriber Bad</h2>
    <mat-card>
        <mat-card-header>state$:</mat-card-header>
        <mat-card-content>
            <pre>{{state$ | async | json}}</pre>
        </mat-card-content>
    </mat-card>
  `,
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LateSubscriberBadDisplayComponent {


    state$ = new Subject();

    constructor() {
    }

    @Input()
    set state(value) {
        this.state$.next({value});
    }

}
