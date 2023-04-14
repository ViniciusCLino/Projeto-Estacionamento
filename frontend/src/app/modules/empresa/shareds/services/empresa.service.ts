import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ServiceBase } from 'app/core/base/service-base/service-base';
import { environment } from 'app/environments/environments';
import { Observable } from 'rxjs';
import { Empresa } from '../interfaces/empresa.interface';
import { FilterEmpresa } from '../interfaces/filtro-empresa.interface';


@Injectable({
    providedIn: 'root'
})
export class EmpresaService extends ServiceBase<Empresa> {
    private path: string = `${environment.server}/api`
    
    
    constructor(
        protected _http: HttpClient,
        public dialog: MatDialog
    ) {
        super();
    }

    find(filtro?: FilterEmpresa): Observable<Array<Empresa>> {
        const params = this.toGetParams({})
        const url = `${this.path}/empresa`
        return this._http.get<Array<Empresa>>(url, {params: params})
    }

    findById(id: number): Observable<Empresa>{
        const url = `${this.path}/empresa/${id}`
        return this._http.get<Empresa>(url);
    }

    save(empresa: Empresa): Observable<Empresa> {
        if (empresa.id) {
            return this.update(empresa)

        }
        else {
            return this.create(empresa)
        }
    }

    create(empresa: Empresa): Observable<Empresa> {
        const url = `${this.path}/empresa`;
        return this._http.post<Empresa>(
            url,
            Object.assign({}, empresa)
        );
    }

    update(empresa: Empresa): Observable<Empresa> {
        const url = `${this.path}/empresa/${empresa.id}`;
        return this._http.put<Empresa>(
            url,
            Object.assign({}, empresa)
        );
    }

    delete(id: number): Observable<void> {
        const url = `${this.path}/empresa/${id}`
        return this._http.delete<void>(url)
    }

}
