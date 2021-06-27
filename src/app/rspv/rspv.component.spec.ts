import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RSPVComponent } from './rspv.component';

describe('RSPVComponent', () => {
  let component: RSPVComponent;
  let fixture: ComponentFixture<RSPVComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RSPVComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RSPVComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
