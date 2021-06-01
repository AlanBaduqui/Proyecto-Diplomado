import { TestBed } from '@angular/core/testing';

import { TakenInterceptorService } from './taken-interceptor.service';

describe('TakenInterceptorService', () => {
  let service: TakenInterceptorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TakenInterceptorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
