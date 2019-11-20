import {OnDestroy, OnInit, Pipe, PipeTransform} from '@angular/core';
import {TimingGlobalService} from './timing.global.service';
import {LoggerService, LogObject} from "@common";

@Pipe({
    name: 'childPipe'
})
export class TimingChildPipe implements PipeTransform, OnInit, OnDestroy {

    constructor(private globalService: TimingGlobalService, private logger: LoggerService) {
        this.log({hook: "constructor"});
    }

    log(l: Partial<LogObject>) {
        this.logger.log({
            msg: "TimingChildPipe",
            creator: "pipe",
            creatorInstance: 'TimingChildPipe',
            ...l})
    }

    transform(value, args?): any {
        this.log({hook: "pipe-transform"});
        return value;
    }

    ngOnInit(): void {
        this.log({hook: "ngOnInit"});
    }

    ngOnDestroy() {
        this.log({hook: "ngOnDestroy"});
    }

}
