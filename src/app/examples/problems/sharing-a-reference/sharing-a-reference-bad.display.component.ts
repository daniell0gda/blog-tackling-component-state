import {Component, Input, Output} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {Observable, ReplaySubject} from 'rxjs';
import {map, startWith, switchMap} from 'rxjs/operators';

@Component({
    selector: 'sharing-a-reference-bad-display',
    template: `
        <h2>Sharing a reference Bad</h2>
        <form *ngIf="(formGroup$ | async) as formGroup" [formGroup]="formGroup">
            <mat-form-field *ngFor="let c of formGroup.controls | keyvalue">
                <input matInput [placeholder]="c.key" [formControlName]="c.key">
            </mat-form-field>
        </form>
    `
})
export class SharingAReferenceBadDisplayComponent {
    state$ = new ReplaySubject(1);

    @Input()
    set formGroupModel(modelFromInput: { [key: string]: any }) {
        if (modelFromInput) {
            this.state$.next(modelFromInput);
        }
    }

    formGroup$: Observable<FormGroup> = this.state$
        .pipe(
            startWith({}),
            map(input => this.getFormGroupFromConfig(input))
        );

    @Output() formValueChange = this.formGroup$
        .pipe(switchMap((fg: FormGroup) => fg.valueChanges));

    constructor(private fb: FormBuilder) {

    }

    getFormGroupFromConfig(modelFromInput) {
        const config = Object.entries(modelFromInput)
            .reduce((c, [name, initialValue]) => ({...c, [name]: [initialValue]}), {});
        return this.fb.group(config);
    }

}
