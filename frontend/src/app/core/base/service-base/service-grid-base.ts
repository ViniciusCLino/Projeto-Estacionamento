import { Observable } from 'rxjs';
import { ModelBase } from '../model-base/model-base';
import { FiltroBase } from '../form-filtro-base/interfaces/filtro-base.interface';
import { ServiceBase } from './service-base';
import { Injectable } from '@angular/core';
import { Response } from './response.interface';

@Injectable()
export abstract class ServiceGridBase<
    T extends ModelBase,
    F extends FiltroBase
> extends ServiceBase<T> {
    abstract find(filtro: F): Observable<Response<Array<T>>>;
}
