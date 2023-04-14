import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Response } from 'app/core/base/service-base/response.interface';
import { ServiceBase } from 'app/core/base/service-base/service-base';
import { Observable, of } from 'rxjs';


@Injectable({
    providedIn: 'root'
})
export class CorService {
    
    constructor(
    ) {
    }
    
    getCor(): Array<string>
    {   
        return [
            'amarelo',
            'azul',
            'vermelho'
        ]
    }
}
