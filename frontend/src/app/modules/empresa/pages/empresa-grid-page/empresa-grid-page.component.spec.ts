import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpresaGridPageComponent } from './empresa-grid-page.component';

describe('EmpresaGridPageComponent', () => {
  let component: EmpresaGridPageComponent;
  let fixture: ComponentFixture<EmpresaGridPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmpresaGridPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmpresaGridPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
