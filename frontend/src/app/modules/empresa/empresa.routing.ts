import { Route } from '@angular/router';
import { EmpresaCadastroPageComponent } from './pages/empresa-cadastro-page/empresa-cadastro-page.component';
import { EmpresaGridPageComponent } from './pages/empresa-grid-page/empresa-grid-page.component';
import { EmpresaDetalheResolver } from './shareds/resolvers/empresa.resolvers';

export const empresaRoutes: Route[] = [
    {
        path     : '',
        component: EmpresaGridPageComponent,
    },
    {
        path     : 'cadastro',
        component: EmpresaCadastroPageComponent,
    },
    {
     path     : 'cadastro/:id',
     resolve: {
      carro: EmpresaDetalheResolver
     },
     component: EmpresaCadastroPageComponent,
 }
];


