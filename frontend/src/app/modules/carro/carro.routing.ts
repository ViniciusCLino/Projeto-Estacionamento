import { Route } from '@angular/router';
import { CarroCadastroPageComponent } from './pages/carro-cadastro-page/carro-cadastro-page.component';
import { CarroGridPageComponent } from './pages/carro-grid-page/carro-grid-page.component';
import { CarroDetalheResolver } from './shareds/resolvers/carro.resolvers';
import { CorListaResolver } from './shareds/resolvers/cor.resolvers';

export const carroRoutes: Route[] = [
   {
       path     : '',
       component: CarroGridPageComponent,
   },
   {
       path     : 'cadastro',
       resolve: {
        listaCores: CorListaResolver
       },
       component: CarroCadastroPageComponent,
   },
   {
    path     : 'cadastro/:id',
    resolve: {
     listaCores: CorListaResolver,
     carro: CarroDetalheResolver
    },
    component: CarroCadastroPageComponent,
}
];
