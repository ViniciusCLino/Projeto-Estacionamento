import { Injectable } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';

@Injectable({
    providedIn: 'root',
})
export class SpinnerService {
    constructor(private _spinner: NgxSpinnerService) {}

    show(): void {
        setTimeout(() => {
            this._spinner.show();
        });
    }

    hide(): void {
        setTimeout(() => {
            this._spinner.hide();
        });
    }
}
