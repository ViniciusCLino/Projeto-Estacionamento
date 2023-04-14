import { Route } from '@angular/router';

// @formatter:off
/* eslint-disable max-len */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
export const appRoutes: Route[] = [

    {path: '', pathMatch : 'full', redirectTo: 'home'},

    {
        path: '',
        children: [
            {path: 'carro', loadChildren: () => import('app/modules/carro/carro.module').then(m => m.CarroModule)},
            {path: 'empresa', loadChildren: () => import('app/modules/empresa/empresa.module').then(m => m.EmpresaModule)},
        ]
    }
];
