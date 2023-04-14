import { Injector, Input, Output, EventEmitter, Injectable } from '@angular/core';
import { FormBase } from '../form-base/form-base';
import { ModelBase } from '../model-base/model-base';
import { FiltroBase } from './interfaces/filtro-base.interface';

@Injectable()
export abstract class FormFiltroBase<F extends FiltroBase, M extends ModelBase> extends FormBase<M> {
    protected filtro: F;

    @Output() filtrar = new EventEmitter<F>();

    constructor(injector: Injector) {
        super(injector);
        this.filtro = Object.assign({});
    }

    get filtroAttr(): F {
        return this.filtro;
    }

    @Input('filtro')
    set filtroAttr(val: F) {
        this.form.setValue(val);
        this.filtro = val;
    }

    getForm(): F{
        return this.form.value
    }

    // filtrarExec(): void {
    //     const filtro: F = this.getForm();
    // }
}
