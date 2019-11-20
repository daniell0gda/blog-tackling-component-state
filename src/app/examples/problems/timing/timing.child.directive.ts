import {Directive, Input, OnChanges, OnDestroy, OnInit} from '@angular/core';
import {TimingLocalService} from "./timing.local.service";
import {LoggerService, LogObject} from "@common";

@Directive({
    selector: '[timing-child-dir]'
})
export class TimingChildDirective implements OnChanges, OnInit, OnDestroy {

    constructor(private logger: LoggerService) {
        this.log({hook: 'constructor'});
    }

    log(l: Partial<LogObject>) {
        this.logger.log({
            msg: "TimingChildDirective",
            creator: "directive",
            creatorInstance: 'TimingChildDirective',
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

    ngOnDestroy() {
        this.log({hook: 'ngOnDestroy'});
    }

}
