import { Component, Injector, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { CarroService } from '../../shareds/services/carro.service';
import { Carro } from '../../shareds/interfaces/carro.interface';
import { ComponentBase } from 'app/core/base/component-base/component-base';

@Component({
  selector: 'carro-grid',
  templateUrl: './carro-grid.component.html',
  styleUrls: ['./carro-grid.component.scss']
})
export class CarroGridComponent extends ComponentBase implements OnInit {

  displayedColumns: string[] = ['seleciona', 'marca', 'modelo', 'cor', 'placa', 'tipo'];
  dataSource = new MatTableDataSource();

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  constructor(
    protected _service: CarroService,
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

  editar(carro: Carro) {
    this._router.navigateByUrl(`carro/cadastro/${carro.id}`)
  }

  public excluir(obj: any){
    this._confirmation.confirm({ titulo: `Deseja remover o carro ${obj.modelo}?`}).subscribe((result) => {
      if (result) {
        this._spinner.show()
        this._service.delete(obj.id).subscribe({
          complete: () => {
              this.sucess('Carro removida com sucesso!')
              this.atualizarGrid();
          },
          error: (error) => this.error(error)
        });
      }
    });
  }
}
