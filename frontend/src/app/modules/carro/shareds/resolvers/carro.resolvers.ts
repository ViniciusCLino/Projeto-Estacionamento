import { Injectable } from '@angular/core';
import {
    ActivatedRouteSnapshot,
    Resolve,
    RouterStateSnapshot,
} from '@angular/router';
import { Observable } from 'rxjs';
import { Carro } from '../interfaces/carro.interface';
import { CarroService } from '../services/carro.service';

@Injectable()
export class CarroDetalheResolver implements Resolve<Carro> {
    constructor(private _service: CarroService) {}

    resolve(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): Observable<any> | Promise<any> | any {
        const id = route.params['id'];
        return this._service
            .findById(id)
    }
}