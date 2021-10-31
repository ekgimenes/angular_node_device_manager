import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReaddeviceComponent } from './readdevice.component';

describe('ReaddeviceComponent', () => {
  let component: ReaddeviceComponent;
  let fixture: ComponentFixture<ReaddeviceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReaddeviceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReaddeviceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
