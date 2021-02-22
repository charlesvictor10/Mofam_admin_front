import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeProduitCommandeComponent } from './liste-produit-commande.component';

describe('ListeProduitCommandeComponent', () => {
  let component: ListeProduitCommandeComponent;
  let fixture: ComponentFixture<ListeProduitCommandeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListeProduitCommandeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListeProduitCommandeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
