import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ValoresDescricaoComponent } from './valores-descricao.component';

describe('ValoresDescricaoComponent', () => {
  let component: ValoresDescricaoComponent;
  let fixture: ComponentFixture<ValoresDescricaoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ValoresDescricaoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ValoresDescricaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
