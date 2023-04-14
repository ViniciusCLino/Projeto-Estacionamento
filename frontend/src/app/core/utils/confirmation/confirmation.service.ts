import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import {
    ModalConfirmationComponent,
    ModalConfirmationData,
} from './components/modal-confirmation/modal-confirmation.component';

@Injectable({
    providedIn: 'root',
})
export class ConfirmationService {
    constructor(public dialog: MatDialog) {}

    confirm(data: ModalConfirmationData): Observable<any> {
        const dialogRef = this.dialog.open(ModalConfirmationComponent, {
            width: '500px',
            data: data,
        });

        return dialogRef.afterClosed();
    }
}
