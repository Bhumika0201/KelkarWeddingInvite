import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DelpicComponent } from './delpic.component';

describe('DelpicComponent', () => {
  let component: DelpicComponent;
  let fixture: ComponentFixture<DelpicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DelpicComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DelpicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
