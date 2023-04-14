import { ModelBase } from "app/core/base/model-base/model-base";

export interface Empresa extends ModelBase{
    nome?: string;
    cnpj?: string;
    rua?: string;
    numero?: string;
    complemento?: string;
    telefone?: string;
    quantidadeVagasMotos?: number;
    quantidadeVagasCarros?: number;
}
