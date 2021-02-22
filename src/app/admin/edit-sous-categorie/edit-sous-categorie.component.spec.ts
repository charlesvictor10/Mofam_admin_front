import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditSousCategorieComponent } from './edit-sous-categorie.component';

describe('EditSousCategorieComponent', () => {
  let component: EditSousCategorieComponent;
  let fixture: ComponentFixture<EditSousCategorieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditSousCategorieComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditSousCategorieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
