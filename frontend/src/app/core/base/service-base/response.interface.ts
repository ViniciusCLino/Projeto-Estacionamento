
export interface Response<T> {
    data: T;
    mensagem?: string;
    meta?: {
        pagination?: Paginacao;
    };
}

export interface Paginacao {
    currentPage: number;
    perPage: number;
    total: number;
}
