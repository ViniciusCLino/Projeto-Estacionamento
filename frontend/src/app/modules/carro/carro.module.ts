import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTabsModule } from '@angular/material/tabs';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatMenuModule } from '@angular/material/menu';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatSelectModule } from '@angular/material/select';
import { MatTooltipModule } from '@angular/material/tooltip';
import { CarroCadastroComponent } from './components/carro-cadastro/carro-cadastro.component';
import { CarroService } from './shareds/services/carro.service';
import { SharedModule } from 'app/shared.module';
import { CarroGridComponent } from './components/carro-grid/carro-grid.component';
import { CarroCadastroPageComponent } from './pages/carro-cadastro-page/carro-cadastro-page.component';
import { CarroGridPageComponent } from './pages/carro-grid-page/carro-grid-page.component';
import { carroRoutes } from './carro.routing';
import { RouterModule } from '@angular/router';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatRippleModule } from '@angular/material/core';
import { CorListaResolver } from './shareds/resolvers/cor.resolvers';
import { CorService } from './shareds/services/cor.service';
import { CarroDetalheResolver } from './shareds/resolvers/carro.resolvers';


@NgModule({
    declarations: [
        CarroCadastroComponent,
        CarroGridComponent,
        CarroGridPageComponent,
        CarroCadastroPageComponent,
    ],
    imports: [
        CommonModule,
        SharedModule,
        RouterModule.forChild(carroRoutes),

        //Material
        MatTabsModule,
        MatButtonModule,
        MatDividerModule,
        MatIconModule,
        MatTableModule,
        MatSortModule,
        MatPaginatorModule,
        MatInputModule,
        MatCheckboxModule,
        MatFormFieldModule,
        MatMenuModule,
        MatDialogModule,
        MatDatepickerModule,
        MatSelectModule,
        MatTooltipModule,
        MatSlideToggleModule,
        MatRippleModule,
        
    ],
    exports: [
        CarroGridPageComponent,
        CarroCadastroPageComponent,
    ],
    providers: [
        CarroService,
        CorService,

        CorListaResolver,
        CarroDetalheResolver,
    ],
})
export class CarroModule { }
