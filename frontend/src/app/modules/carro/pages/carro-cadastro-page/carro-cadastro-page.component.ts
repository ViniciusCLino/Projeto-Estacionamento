import { Component, Injector, OnInit } from '@angular/core';
import { ComponentBase } from 'app/core/base/component-base/component-base';
import { Carro } from '../../shareds/interfaces/carro.interface';
import { CarroService } from '../../shareds/services/carro.service';

@Component({
  selector: 'carro-cadastro-page',
  templateUrl: './carro-cadastro-page.component.html',
  styleUrls: ['./carro-cadastro-page.component.scss']
})
export class CarroCadastroPageComponent extends ComponentBase implements OnInit{
  
  public carro: Carro = {}

  constructor(
      private _injector: Injector,
      private _service: CarroService,
  ){
      super(_injector)
      this._route.data.subscribe(data => {
          // this.carro = data.carro
      })
  }

  ngOnInit(): void {

  }

}
