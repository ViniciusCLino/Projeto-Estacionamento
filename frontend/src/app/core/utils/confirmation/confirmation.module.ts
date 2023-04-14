import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalConfirmationComponent } from './components/modal-confirmation/modal-confirmation.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { ConfirmationService } from './confirmation.service';

@NgModule({
    declarations: [ModalConfirmationComponent],
    imports: [
        CommonModule,

        // Mat
        MatIconModule,
        MatButtonModule,
        MatDialogModule,
    ],
    providers: [ConfirmationService],
    entryComponents: [ModalConfirmationComponent],
})
export class ConfirmationModule {}
