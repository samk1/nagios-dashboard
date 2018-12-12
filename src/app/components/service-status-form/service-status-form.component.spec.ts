import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceStatusFormComponent } from './service-status-form.component';

describe('ServiceStatusFormComponent', () => {
  let component: ServiceStatusFormComponent;
  let fixture: ComponentFixture<ServiceStatusFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ServiceStatusFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ServiceStatusFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
