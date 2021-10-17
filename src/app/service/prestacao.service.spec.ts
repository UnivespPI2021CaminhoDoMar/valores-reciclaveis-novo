import { TestBed } from '@angular/core/testing';

import { PrestacaoService } from './prestacao.service';

describe('PrestacaoService', () => {
  let service: PrestacaoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PrestacaoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
