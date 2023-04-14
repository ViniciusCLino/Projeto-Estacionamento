import { Injectable } from '@angular/core';
import {
    ActivatedRouteSnapshot,
    Resolve,
    RouterStateSnapshot,
} from '@angular/router';
import { Observable } from 'rxjs';
import { Empresa } from '../interfaces/empresa.interface';
import { EmpresaService } from '../services/empresa.service';

@Injectable()
export class EmpresaDetalheResolver implements Resolve<Empresa> {
    constructor(private _service: EmpresaService) {}

    resolve(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): Observable<any> | Promise<any> | any {
        const id = route.params['id'];
        return this._service
            .findById(id)
    }
}