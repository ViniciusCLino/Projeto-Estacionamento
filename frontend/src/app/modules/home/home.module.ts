import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { landingHomeRoutes } from './home.routing';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'app/shared.module';
import { EmpresaModule } from '../empresa/empresa.module';
import {MatToolbarModule} from '@angular/material/toolbar';



@NgModule({
  declarations: [
    HomePageComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(landingHomeRoutes),
    SharedModule,
    EmpresaModule,

    //MATERIAL
    
  ]
})
export class HomeModule { }
