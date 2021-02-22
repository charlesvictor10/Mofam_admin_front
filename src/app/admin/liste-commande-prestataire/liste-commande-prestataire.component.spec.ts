import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeCommandePrestataireComponent } from './liste-commande-prestataire.component';

describe('ListeCommandePrestataireComponent', () => {
  let component: ListeCommandePrestataireComponent;
  let fixture: ComponentFixture<ListeCommandePrestataireComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListeCommandePrestataireComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListeCommandePrestataireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
