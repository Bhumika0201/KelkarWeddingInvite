import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WeddingHostsComponent } from './wedding-hosts.component';

describe('WeddingHostsComponent', () => {
  let component: WeddingHostsComponent;
  let fixture: ComponentFixture<WeddingHostsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WeddingHostsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeddingHostsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
