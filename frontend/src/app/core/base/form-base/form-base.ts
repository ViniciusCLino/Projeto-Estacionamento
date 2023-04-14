import { Injector, Input, Output, Injectable } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ComponentBase } from '../component-base/component-base';
import { ModelBase } from '../model-base/model-base';

@Injectable()
export abstract class FormBase extends ComponentBase {
    protected _formBuilder: FormBuilder;

    public form: FormGroup;

    constructor(injector: Injector) {
        super(injector)
        this._formBuilder = injector.get(FormBuilder);
        this.form = this._formBuilder.group(this.crateForm() || null);
    }

    selectedOption(o1: any, o2: any) {
        if(!o1 || !o2) return false;
        return o1.id == o2.id;
    }

    selectedOptionChave(o1: any, o2: any) {
        if(!o1 || !o2) return false;
        return o1.chave == o2.chave;
    }

    selectedOptionId(o1: any, o2: any) {
        if(!o1 || !o2) return false;
        return o1.id == o2;
    }

    selectedOptionCodigo(o1: any, o2: any) {
        if(!o1 || !o2) return false;
        return o1.codigo == o2.codigo;
    }

    protected abstract crateForm(): {
        [key: string]: any;
    };

    limpar(){
        this.form.reset();
    }
}
