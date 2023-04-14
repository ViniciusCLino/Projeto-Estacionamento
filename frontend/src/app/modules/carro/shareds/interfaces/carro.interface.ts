import { ModelBase } from "app/core/base/model-base/model-base";

export interface Carro extends ModelBase{
    marca?: string;
    modelo?: string;
    cor?: string;
    placa?: string;
    tipo?: string;
}
