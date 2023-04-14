import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

export interface ModalConfirmationData {
    titulo?: string;
    mensagem?: string;
}

@Component({
    selector: 'modal-confirmation',
    templateUrl: './modal-confirmation.component.html',
    styleUrls: ['./modal-confirmation.component.scss'],
})
export class ModalConfirmationComponent implements OnInit {
    obj: ModalConfirmationData = {};
    constructor(
        public dialogRef: MatDialogRef<ModalConfirmationComponent>,
        @Inject(MAT_DIALOG_DATA) public data: ModalConfirmationData
    ) {
        this.obj = this.data;
    }
    ngOnInit(): void {}

    fechar(): void {
        this.dialogRef.close();
    }
}
