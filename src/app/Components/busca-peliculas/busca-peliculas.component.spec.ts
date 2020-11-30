import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuscaPeliculasComponent } from './busca-peliculas.component';

describe('BuscaPeliculasComponent', () => {
  let component: BuscaPeliculasComponent;
  let fixture: ComponentFixture<BuscaPeliculasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuscaPeliculasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BuscaPeliculasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
