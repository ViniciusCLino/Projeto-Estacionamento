import { FiltroBase } from "app/core/base/form-filtro-base/interfaces/filtro-base.interface";

export interface FilterCarro extends FiltroBase{
    marca?: string;
    modelo?: string;
    cor?: string;
    placa?: string;
    tipo?: string;
}
