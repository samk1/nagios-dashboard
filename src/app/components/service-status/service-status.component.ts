import { Component, OnInit, Input } from '@angular/core';

export enum ServiceStatusType {
  Ok = 'OK',
  Warning = 'WARNING',
  Critical = 'CRITICAL',
  Unknown = 'UNKNOWN'
}

@Component({
  selector: 'app-service-status',
  templateUrl: './service-status.component.html',
  styleUrls: ['./service-status.component.scss']
})
export class ServiceStatusComponent implements OnInit {
  @Input() status: ServiceStatusType
  @Input() name: string

  getStatusClass() : string {
    switch (this.status) {
      case ServiceStatusType.Ok:
        return 'status-ok';
      case ServiceStatusType.Warning:
        return 'status-warning';
      case ServiceStatusType.Critical:
        return 'status-critical';
      case ServiceStatusType.Unknown:
        return 'status-unknown';
      default:
        break;
    }
  }

  constructor(

  ) { }

  ngOnInit() {
  }

}
