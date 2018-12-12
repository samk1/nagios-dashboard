import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceStatusFormComponent } from './service-status-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ComponentsModule } from '..';
import { ServiceStatusFilterComponent } from '../service-status-filter/service-status-filter.component';
import { ServiceStatusFilterValueAccessorDirective } from '../service-status-filter/service-status-filter-value-accessor.directive';

describe('ServiceStatusFormComponent', () => {
  let component: ServiceStatusFormComponent;
  let fixture: ComponentFixture<ServiceStatusFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ 
        ServiceStatusFormComponent, 
        ServiceStatusFilterComponent, 
        ServiceStatusFilterValueAccessorDirective
      ],
      imports: [
        ReactiveFormsModule
      ]
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
