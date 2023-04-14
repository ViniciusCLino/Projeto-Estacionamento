import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarroGridPageComponent } from './carro-grid-page.component';

describe('CarroGridPageComponent', () => {
  let component: CarroGridPageComponent;
  let fixture: ComponentFixture<CarroGridPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarroGridPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarroGridPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
