import { TestBed } from '@angular/core/testing';

import { LlamadaPeliculasService } from './llamada-peliculas.service';

describe('LlamadaPeliculasService', () => {
  let service: LlamadaPeliculasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LlamadaPeliculasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
