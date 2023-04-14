import { Injectable } from '@angular/core';
import { IndividualConfig, ToastrService } from 'ngx-toastr';

@Injectable({
    providedIn: 'root',
})
export class NotificationService {
    private options: Partial<IndividualConfig>;
    constructor(private toastr: ToastrService) {
        this.options = {
            timeOut: 5000,
            closeButton: true,
            progressBar: true,
        };
    }

    sucess(
        title: string,
        description?: string,
        options?: Partial<IndividualConfig>
    ): void {
        this.toastr.success(
            title,
            description,
            Object.assign({}, this.options, options)
        );
    }

    info(
        title: string,
        description?: string,
        options?: Partial<IndividualConfig>
    ): void {
        this.toastr.info(
            title,
            description,
            Object.assign({}, this.options, options)
        );
    }

    warning(
        title: string,
        description?: string,
        options?: Partial<IndividualConfig>
    ): void {
        this.toastr.warning(
            title,
            description,
            Object.assign({}, this.options, options)
        );
    }

    error(
        title: string,
        description?: string,
        options?: Partial<IndividualConfig>
    ): void {
        this.toastr.error(
            title,
            description,
            Object.assign({}, this.options, options)
        );
    }
}
