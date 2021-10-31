import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReadcategoryComponent } from './readcategory.component';

describe('ReadcategoryComponent', () => {
  let component: ReadcategoryComponent;
  let fixture: ComponentFixture<ReadcategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReadcategoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReadcategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
