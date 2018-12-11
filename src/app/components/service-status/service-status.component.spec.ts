import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceStatusComponent, ServiceStatusType } from './service-status.component';

describe('ServiceStatusComponent', () => {
  let component: ServiceStatusComponent;
  let fixture: ComponentFixture<ServiceStatusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServiceStatusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServiceStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display service name and status', () => {
    component.name = "test service";
    component.status = ServiceStatusType.Ok;
  })
});
