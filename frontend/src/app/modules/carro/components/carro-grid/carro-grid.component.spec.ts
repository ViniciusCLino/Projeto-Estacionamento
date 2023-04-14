import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarroGridComponent } from './carro-grid.component';

describe('CarroGridComponent', () => {
  let component: CarroGridComponent;
  let fixture: ComponentFixture<CarroGridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarroGridComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarroGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
