import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot } from '@angular/router';
import { map, Observable } from 'rxjs';
import { CorService } from '../services/cor.service';

@Injectable({
    providedIn: 'root'
})
export class CorListaResolver implements Resolve<any>
{
    /**
     * Constructor
     */
    constructor(private _service: CorService)
    {
    }

    // -----------------------------------------------------------------------------------------------------
    // @ Public methods
    // -----------------------------------------------------------------------------------------------------

    /**
     * Resolver
     *
     * @param route
     * @param state
     */
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Array<string>
    {
        return this._service.getCor();
    }
}


