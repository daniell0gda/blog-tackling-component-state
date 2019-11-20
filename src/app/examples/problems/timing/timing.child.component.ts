import {
    AfterContentChecked,
    AfterContentInit,
    AfterViewChecked,
    AfterViewInit,
    ChangeDetectionStrategy,
    Component,
    Input,
    OnChanges,
    OnDestroy,
    OnInit
} from '@angular/core';
import {TimingLocalService} from './timing.local.service';
import {of} from 'rxjs';
import {tap} from 'rxjs/operators';
import {LoggerService, LogObject} from "@common";

@Component({
    selector: 'timing-child',
    template: `
    <p>Child Template Expression: {{templateExpression$ | async | childPipe}}</p>
        <input [value]="'templateBinding' | childPipe">
  `,
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [TimingLocalService]
})
export class TimingChildComponent implements OnChanges, OnInit, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {

    templateExpression$ = of('templateExpression')
        .pipe(tap(_ => this.log({hook: 'template-expression'})));

    constructor(private localService: TimingLocalService, private logger: LoggerService) {
        this.log({hook: 'constructor'});
    }



    log(l: Partial<LogObject>) {
        this.logger.log({
            msg: "ChildComponent",
            creator: "component",
            creatorInstance: 'ChildComponent',
            ...l})
    }

    @Input() set value(v) {
        this.log({hook: 'input-change', data: v});
    }

    ngOnChanges(changes) {
        this.log({hook: 'ngOnChanges'});
    }

    ngOnInit() {
        this.log({hook: 'ngOnInit'});
    }

    ngAfterContentInit() {
        this.log({hook: 'ngAfterContentInit'});
    }

    ngAfterContentChecked() {
        this.log({hook: 'ngAfterContentChecked'});
    }

    ngAfterViewInit() {
        this.log({hook: 'ngAfterViewInit'});
    }

    ngAfterViewChecked() {
        this.log({hook: 'ngAfterViewChecked'});
    }

    ngOnDestroy() {
        this.log({hook: 'ngOnDestroy'});
    }

}
