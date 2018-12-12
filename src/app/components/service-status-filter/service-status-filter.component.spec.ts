import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceStatusFilterComponent } from './service-status-filter.component';

describe('ServiceStatusFilterComponent', () => {
  let component: ServiceStatusFilterComponent;
  let fixture: ComponentFixture<ServiceStatusFilterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServiceStatusFilterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServiceStatusFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
