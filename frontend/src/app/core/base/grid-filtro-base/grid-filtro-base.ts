import { Injectable } from '@angular/core';
import { FormFiltroBase } from '../form-filtro-base/form-filtro-base';
import { FiltroBase } from '../form-filtro-base/interfaces/filtro-base.interface';
import { ModelBase } from '../model-base/model-base';

@Injectable()
export abstract class GridFiltroBase<F extends FiltroBase, M extends ModelBase> extends FormFiltroBase<F, M> {

    abstract atualizarGrid(filtro?: F, callback?: Function): void;

    filtrarExec(): void {
        const filtro: F = this.getForm();
        this.atualizarGrid(filtro);
    }
}
