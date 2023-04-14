import { Component, Injector, Input, OnInit } from '@angular/core';
import { Validators } from '@angular/forms';
import { FormBase } from 'app/core/base/form-base/form-base';
import { Empresa } from '../../shareds/interfaces/empresa.interface';
import { EmpresaService } from '../../shareds/services/empresa.service';

@Component({
  selector: 'empresa-cadastro',
  templateUrl: './empresa-cadastro.component.html',
  styleUrls: ['./empresa-cadastro.component.scss']
})
export class EmpresaCadastroComponent extends FormBase implements OnInit {

  public carro: Empresa = {};

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
    protected service: EmpresaService,
    protected _service: EmpresaService,
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
      nome: ['', Validators.required],
      cnpj: ['', Validators.required],
      rua: ['', Validators.required],
      numero: ['', Validators.required],
      complemento: ['', Validators.required],
      telefone: ['', Validators.required],
      quantidadeVagasMotos: ['', Validators.required],
      quantidadeVagasCarros: ['', Validators.required]
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

  setForm(obj: Empresa){
    this.form.patchValue({
      id: obj.id,
      nome: obj.nome,
      cnpj: obj.cnpj,
      rua: obj.rua,
      numero: obj.numero,
      complemento: obj.complemento,
      telefone: obj.telefone,
      quantidadeVagasMotos: obj.quantidadeVagasMotos,
      quantidadeVagasCarros: obj.quantidadeVagasCarros,
    })
  }

  voltar(){
    this._router.navigateByUrl('empresa')
  }

}

