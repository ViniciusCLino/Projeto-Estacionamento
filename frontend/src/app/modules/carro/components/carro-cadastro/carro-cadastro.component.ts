import { Component, EventEmitter, Injector, Input, OnInit, Output } from '@angular/core';
import { Validators } from '@angular/forms';
import { FormBase } from 'app/core/base/form-base/form-base';
import { Carro } from '../../shareds/interfaces/carro.interface';
import { CarroService } from '../../shareds/services/carro.service';

@Component({
  selector: 'carro-cadastro',
  templateUrl: './carro-cadastro.component.html',
  styleUrls: ['./carro-cadastro.component.scss']
})
export class CarroCadastroComponent extends FormBase implements OnInit {

  public carro: Carro = {};

  listaCores: Array<string> = []

  public _obj: any = Object.create({});
    get obj(): any {
        return this._obj;
  }

  @Input()
    set obj(val: any) {
        if(val && val.id){
            this._obj = val
            this.setForm(val)
        }
    }

  constructor(
    protected injector: Injector,
    protected service: CarroService,
    protected _service: CarroService,
  ) {
    super(injector);
  }

  ngOnInit() {
    this._route.data.subscribe(data => {
      this.listaCores = data['listaCores']
      if(data['carro']) {
        this.setForm(data['carro'])
      }
    })
  }

  protected crateForm(): { [key: string]: any } {
    return {
      id: [],
      marca: ['', Validators.required],
      modelo: ['', Validators.required],
      cor: ['', Validators.required],
      placa: ['', Validators.required],
      tipo: ['', Validators.required]
    };
  }

  salvar() {
    this.getForm()
    this._spinner.show();
    this._service.save(this._obj).subscribe({
        complete: () => {
            this.sucess('Dados salvos com sucesso')
            this.voltar()
        },
        error: (error) => this.error(error)
    });
  } 

  getForm(){
    this._obj = Object.assign({}, this._obj, this.form.value)
  }

  setForm(obj: Carro){
    this.form.patchValue({
      id: obj.id,
      marca: obj.marca,
      modelo: obj.modelo,
      cor: obj.cor,
      placa: obj.placa,
      tipo: obj.tipo,
    })
  }

  voltar(){
    this._router.navigateByUrl('carro')
  }

}
