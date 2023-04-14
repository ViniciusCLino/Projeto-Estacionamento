import { Component, Injector, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { EmpresaService } from '../../shareds/services/empresa.service';
import { ComponentBase } from 'app/core/base/component-base/component-base';
import { Empresa } from '../../shareds/interfaces/empresa.interface';

@Component({
  selector: 'empresa-grid',
  templateUrl: './empresa-grid.component.html',
  styleUrls: ['./empresa-grid.component.scss']
})
export class EmpresaGridComponent extends ComponentBase implements OnInit {

  displayedColumns: string[] = ['seleciona', 'nome', 'cnpj', 'quantidadeVagasMotos', 'quantidadeVagasCarros'];
  dataSource = new MatTableDataSource();

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  constructor(
    protected _service: EmpresaService,
    protected _injector: Injector,
  ) {
    super(_injector);
  }

  ngOnInit() {
    this.atualizarGrid()
  }

  atualizarGrid() {
    this._spinner.show()
    this._service.find().subscribe( result => {
      this.dataSource.data = result
      this._spinner.hide()
    },
    error => this.error(error)
    )
  }

  editar(empresa: Empresa) {
    this._router.navigateByUrl(`empresa/cadastro/${empresa.id}`)
  }

  public excluir(obj: any){
    this._confirmation.confirm({ titulo: `Deseja remover o empresa ${obj.modelo}?`}).subscribe((result) => {
      if (result) {
        this._spinner.show()
        this._service.delete(obj.id).subscribe({
          complete: () => {
              this.sucess('Empresa removida com sucesso!')
              this.atualizarGrid();
          },
          error: (error) => this.error(error)
        });
      }
    });
  }
}
