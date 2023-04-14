import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ExtraOptions, PreloadAllModules, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { appRoutes } from './app.routing';
import { SharedModule } from './shared.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EmpresaModule } from './modules/empresa/empresa.module';
import { CarroModule } from './modules/carro/carro.module';
import { carroRoutes } from './modules/carro/carro.routing';
import { empresaRoutes } from './modules/empresa/empresa.routing';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import { HttpClientModule } from '@angular/common/http';
import { CoreModule } from './core/core.module';


const routerConfig: ExtraOptions = {
  preloadingStrategy       : PreloadAllModules,
  scrollPositionRestoration: 'enabled'
};


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,

    //ROUTING
    RouterModule.forRoot(appRoutes, routerConfig),
    RouterModule.forChild(carroRoutes),
    RouterModule.forChild(empresaRoutes),

    //SHAREDS
    SharedModule,
    CoreModule,
    BrowserAnimationsModule,
    HttpClientModule,

    ///MATERIAL
    MatDividerModule,
    MatListModule,

    //MÓDULOS
    EmpresaModule,
    CarroModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
