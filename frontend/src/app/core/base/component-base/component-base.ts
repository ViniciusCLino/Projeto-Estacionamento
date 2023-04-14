import { Injectable, Injector } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ConfirmationService } from 'app/core/utils/confirmation/confirmation.service';
import { NotificationService } from 'app/core/utils/notification/notification.service';
import { SpinnerService } from 'app/core/utils/spinner/spinner.service';

@Injectable()
export abstract class ComponentBase {
    protected _route: ActivatedRoute;
    protected _router: Router;
    protected _spinner: SpinnerService;
    protected _notification: NotificationService;
    protected _confirmation: ConfirmationService

    constructor(injector: Injector) {
        this._route = injector.get(ActivatedRoute);
        this._router = injector.get(Router);
        this._spinner = injector.get(SpinnerService);
        this._notification = injector.get(NotificationService);
        this._confirmation = injector.get(ConfirmationService)
    }

    protected error(obj: any){
        this._spinner.hide();
        if(obj && obj.error && obj.error.errors && obj.error.errors){
            const listaError = obj.error.errors;
            for (const key in listaError) {
                const listaMensagem = listaError[key]
                this._notification.error(listaMensagem.join(' - '));
            }
        }
        else{
            console.log(obj)
        }
    }

    protected sucess(mensagem: string){
        this._spinner.hide();
        this._notification.sucess(mensagem);
    }
}
