import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { EmpresaCadastroComponent } from './components/empresa-cadastro/empresa-cadastro.component';
import { SharedModule } from 'app/shared.module';
import { EmpresaCadastroPageComponent } from './pages/empresa-cadastro-page/empresa-cadastro-page.component';
import { RouterModule } from '@angular/router';
import { empresaRoutes } from './empresa.routing';
import { MatTabsModule } from '@angular/material/tabs';
import { MatDividerModule } from '@angular/material/divider';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatMenuModule } from '@angular/material/menu';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatSelectModule } from '@angular/material/select';
import { MatTooltipModule } from '@angular/material/tooltip';
import { EmpresaGridPageComponent } from './pages/empresa-grid-page/empresa-grid-page.component';
import { EmpresaGridComponent } from './components/empresa-grid/empresa-grid.component';
import { EmpresaService } from './shareds/services/empresa.service';
import { EmpresaDetalheResolver } from './shareds/resolvers/empresa.resolvers';

@NgModule({
    declarations: [

        //PAGES
        EmpresaGridPageComponent,
        EmpresaCadastroPageComponent,

        //COMPONENT
        EmpresaCadastroComponent,
        EmpresaGridComponent,
    ],
    imports: [
        CommonModule,
        RouterModule.forChild(empresaRoutes),
        SharedModule,

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
    ],
    exports: [
        EmpresaGridPageComponent,
        EmpresaCadastroPageComponent,
    ],
    providers: [
        EmpresaService,
        EmpresaDetalheResolver,
    ],
})
export class EmpresaModule { }
