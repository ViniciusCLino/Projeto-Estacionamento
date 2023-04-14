import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpinnerComponent } from './spinner.component';
import { NgxSpinnerModule } from 'ngx-spinner';
import { SpinnerService } from './spinner.service';

@NgModule({
    declarations: [SpinnerComponent],
    imports: [CommonModule, NgxSpinnerModule],
    exports: [SpinnerComponent],
    providers: [SpinnerService],
})
export class SpinnerModule {}
