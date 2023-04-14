import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ServiceBase } from 'app/core/base/service-base/service-base';
import { environment } from 'app/environments/environments';
import { Observable } from 'rxjs';
import { Carro } from '../interfaces/carro.interface';
import { FilterCarro } from '../interfaces/filtro-carro.interface';


@Injectable({
    providedIn: 'root'
})
export class CarroService extends ServiceBase<Carro> {
    private path: string = `${environment.server}/api`
    
    
    constructor(
        protected _http: HttpClient,
        public dialog: MatDialog
    ) {
        super();
    }

    find(filtro?: FilterCarro): Observable<Array<Carro>> {
        const params = this.toGetParams({})
        const url = `${this.path}/carro`
        return this._http.get<Array<Carro>>(url, {params: params})
    }

    findById(id: number): Observable<Carro>{
        const url = `${this.path}/carro/${id}`
        return this._http.get<Carro>(url);
    }

    save(carro: Carro): Observable<Carro> {
        if (carro.id) {
            return this.update(carro)

        }
        else {
            return this.create(carro)
        }
    }

    create(carro: Carro): Observable<Carro> {
        const url = `${this.path}/carro`;
        return this._http.post<Carro>(
            url,
            Object.assign({}, carro)
        );
    }

    update(carro: Carro): Observable<Carro> {
        const url = `${this.path}/carro/${carro.id}`;
        return this._http.put<Carro>(
            url,
            Object.assign({}, carro)
        );
    }

    delete(id: number): Observable<void> {
        const url = `${this.path}/carro/${id}`
        return this._http.delete<void>(url)
    }

}
