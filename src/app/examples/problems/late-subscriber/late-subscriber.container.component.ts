import {ChangeDetectionStrategy, Component} from '@angular/core';
import {of} from 'rxjs';

@Component({
    selector: 'late-subscribers-container',
    template: `
    <p><b>state$:</b></p>
    <pre>{{num$ | async | json}}</pre>
    <div class="row">
        <div class="col">
            <late-subscriber-bad-display [state]="num$ | async">
            </late-subscriber-bad-display>
        </div>
        <div class="col">
            <late-subscriber-display [state]="num$ | async">
            </late-subscriber-display>  
        </div>
    </div>
  `,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class LateSubscribersContainerComponent {
    num$ = of(1);

    constructor() {
        console.log('Container Constructor')
    }

}
