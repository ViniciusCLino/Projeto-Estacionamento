import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarroCadastroPageComponent } from './carro-cadastro-page.component';

describe('CarroCadastroPageComponent', () => {
  let component: CarroCadastroPageComponent;
  let fixture: ComponentFixture<CarroCadastroPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarroCadastroPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarroCadastroPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
