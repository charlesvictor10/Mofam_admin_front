import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListePhotoProduitsComponent } from './liste-photo-produits.component';

describe('ListePhotoProduitsComponent', () => {
  let component: ListePhotoProduitsComponent;
  let fixture: ComponentFixture<ListePhotoProduitsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListePhotoProduitsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListePhotoProduitsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
