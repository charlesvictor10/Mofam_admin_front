import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListePhotoPartenersComponent } from './liste-photo-parteners.component';

describe('ListePhotoPartenersComponent', () => {
  let component: ListePhotoPartenersComponent;
  let fixture: ComponentFixture<ListePhotoPartenersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListePhotoPartenersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListePhotoPartenersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
