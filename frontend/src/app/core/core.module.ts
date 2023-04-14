import { NgModule, Optional, SkipSelf } from '@angular/core';
import { AuthModule } from 'app/core/auth/auth.module';
import { IconsModule } from 'app/core/icons/icons.module';
import { ToastrModule } from 'ngx-toastr';
import { ConfirmationModule } from './utils/confirmation/confirmation.module';
import { SpinnerModule } from './utils/spinner/spinner.module';
import { NotificationService } from './utils/notification/notification.service';
import { ConfirmationService } from './utils/confirmation/confirmation.service';
import { SpinnerService } from './utils/spinner/spinner.service';

@NgModule({
    declarations: [

    ],
    imports: [
        AuthModule,
        IconsModule,
        ConfirmationModule,
        SpinnerModule,

        //Externos
        ToastrModule.forRoot(),

    ],
    exports:[
        ConfirmationModule,
        SpinnerModule,
        ToastrModule

    ],
    providers: [
        NotificationService,
        ConfirmationService,
        SpinnerService,
    ]
})
export class CoreModule
{
    /**
     * Constructor
     */
    constructor(
        @Optional() @SkipSelf() parentModule?: CoreModule
    )
    {
        // Do not allow multiple injections
        if ( parentModule )
        {
            throw new Error('CoreModule has already been loaded. Import this module in the AppModule only.');
        }
    }
}
