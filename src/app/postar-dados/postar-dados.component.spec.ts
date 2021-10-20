import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostarDadosComponent } from './postar-dados.component';

describe('PostarDadosComponent', () => {
  let component: PostarDadosComponent;
  let fixture: ComponentFixture<PostarDadosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostarDadosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostarDadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
