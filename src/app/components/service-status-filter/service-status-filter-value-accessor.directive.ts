import { Directive, ComponentRef, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { ServiceStatusFilterValue, ServiceStatusFilterComponent } from './service-status-filter.component';

export const SERVICE_STATUS_FILTER_VALUE_ACCESSOR: any = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => ServiceStatusFilterValueAccessorDirective),
  multi: true
};

@Directive({
  selector: 'app-service-status-filter',
  providers: [SERVICE_STATUS_FILTER_VALUE_ACCESSOR],
  host: {
    '(change)': '_onChanged(host.getValue())',
    '(blur)': '_onTouched()'
  }
})
export class ServiceStatusFilterValueAccessorDirective implements ControlValueAccessor {
  _onChanged: (_: any) => void
  _onTouched: (_: any) => void

  writeValue(obj: ServiceStatusFilterValue): void {
    this.host.setValue(obj)
  }
  registerOnChange(fn: any): void {
    this._onChanged = fn;
  }
  registerOnTouched(fn: any): void {
    this._onTouched = fn;
  }
  setDisabledState?(isDisabled: boolean): void {
    throw new Error("Method not implemented.");
  }

  constructor(
    private host: ServiceStatusFilterComponent
  ) { }

}
