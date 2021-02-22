import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeCommandeParPrestataireComponent } from './liste-commande-par-prestataire.component';

describe('ListeCommandeParPrestataireComponent', () => {
  let component: ListeCommandeParPrestataireComponent;
  let fixture: ComponentFixture<ListeCommandeParPrestataireComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListeCommandeParPrestataireComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListeCommandeParPrestataireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
