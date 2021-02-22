import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeAcheteurComponent } from './liste-acheteur.component';

describe('ListeAcheteurComponent', () => {
  let component: ListeAcheteurComponent;
  let fixture: ComponentFixture<ListeAcheteurComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListeAcheteurComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListeAcheteurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
