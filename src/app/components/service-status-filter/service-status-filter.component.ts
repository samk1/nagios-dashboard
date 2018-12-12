import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormControl } from '@angular/forms';
import * as _ from 'lodash';


export type ServiceStatusFilterValue = {
  ok: boolean
  warning: boolean
  critical: boolean
  unknown: boolean
  pending: boolean
}

export const initialServiceStatusFilterValue = <ServiceStatusFilterValue>{
  ok: false,
  warning: false,
  critical: false,
  unknown: false,
  pending: false
}

@Component({
  selector: 'app-service-status-filter',
  templateUrl: './service-status-filter.component.html',
  styleUrls: ['./service-status-filter.component.scss']
})
export class ServiceStatusFilterComponent implements OnInit {
  filterAll: boolean = false
  filterOk: boolean = false
  filterWarning: boolean = false
  filterCritical: boolean = false
  filterUnknown: boolean = false
  filterPending: boolean = false
  @Output() change = new EventEmitter()
  @Output() blur = new EventEmitter()

  onBlur() {
    this.blur.emit();
  }

  getValue(): ServiceStatusFilterValue {
    return {
      ok: this.filterOk,
      warning: this.filterWarning,
      critical: this.filterCritical,
      unknown: this.filterUnknown,
      pending: this.filterPending
    }
  }

  getAllValue() : boolean {
    return Object.values(this.getValue())
      .reduce((a, v) => a && v, true);
  }

  setValue(value: ServiceStatusFilterValue) {
    this.filterOk = value.ok;
    this.filterWarning = value.warning;
    this.filterCritical = value.critical;
    this.filterUnknown = value.unknown;
    this.filterPending = value.pending;
    this.filterAll = this.getAllValue();
  }

  update() {
    this.filterAll = this.getAllValue();
    this.change.emit();
  }

  toggleAll() {
    this.filterAll ?
      this.setValue(_.mapValues(this.getValue(), () => false)) :
      this.setValue(_.mapValues(this.getValue(), () => true))
    this.change.emit();
  }

  toggleOk() {
    this.filterOk = !this.filterOk;
    this.update();
  }

  toggleWarning() {
    this.filterWarning = !this.filterWarning;
    this.update();
  }

  toggleCritical() {
    this.filterCritical = !this.filterCritical;
    this.update();
  }

  toggleUnknown() {
    this.filterUnknown = !this.filterUnknown;
    this.update();
  }

  togglePending() {
    this.filterPending = !this.filterPending;
    this.update();
  }

  constructor() { }

  ngOnInit() {
  }

}
