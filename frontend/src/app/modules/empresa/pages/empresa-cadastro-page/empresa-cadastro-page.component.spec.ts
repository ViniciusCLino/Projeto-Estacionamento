import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpresaCadastroPageComponent } from './empresa-cadastro-page.component';

describe('EmpresaCadastroPageComponent', () => {
  let component: EmpresaCadastroPageComponent;
  let fixture: ComponentFixture<EmpresaCadastroPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmpresaCadastroPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmpresaCadastroPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
