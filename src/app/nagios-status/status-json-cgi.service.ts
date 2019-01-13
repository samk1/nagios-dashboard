import { Injectable, Inject, InjectionToken } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AbstractCgi, QueryParams } from '../nagios-common';
import { HttpClient } from '@angular/common/http';

export const STATUS_CGI_URL = new InjectionToken<string>("status cgi url");

interface StatusJsonServiceListData {
  selectors: any,
  servicelist: ServiceStatusDataList
}

type ServiceStatusDataList = {[key:string]: ServiceStatusData}

interface ServiceStatusData {
  host_name: string,
  description: string,
  plugin_output: string,
  long_plugin_output: string,
  perf_data: string,
  max_attempts: number,
  current_attempt: number,
  status: number,
  last_update: number,
  has_been_checked: boolean,
  should_be_scheduled: boolean,
  last_check: number,
  check_options: number,
  check_type: number,
  checks_enabled: boolean,
  last_state_change: number,
  last_hard_state_change: number,
  last_hard_state: number,
  last_time_ok: number,
  last_time_warning: number,
  last_time_unknown: number,
  last_time_critical: number,
  state_type: number,
  last_notification: number,
  next_notification: number,
  next_check: number,
  no_more_notifications: boolean,
  notifications_enabled: boolean,
  problem_has_been_acknowledged: boolean,
  acknowledgement_type: number,
  current_notification_number: number,
  accept_passive_checks: boolean,
  event_handler_enabled: boolean,
  flap_detection_enabled: boolean,
  is_flapping: boolean,
  percent_state_change: number,
  latency: number,
  execution_time: number,
  scheduled_downtime_depth: number,
  process_performance_data: boolean,
  obsess: boolean
}

export interface ServiceStatus {
  hostName: string,
  serviceDescription: string,
  pluginOutput: string
}

@Injectable({
  providedIn: 'root'
})
export class StatusJsonCgiService extends AbstractCgi {
  getServiceStatus(): Observable<ServiceStatus[]> {
    const params: QueryParams = {
      details: true,
      query: 'servicelist'
    }

    return this.doRequest<StatusJsonServiceListData>(params).pipe(
      map(data => Object.values(data.servicelist).map(serviceStatusData => 
        (<ServiceStatus>{
          hostName: serviceStatusData.host_name,
          serviceDescription: serviceStatusData.description,
          pluginOutput: serviceStatusData.plugin_output
        }))
    ));
  }

  constructor(
    http: HttpClient,
    @Inject(STATUS_CGI_URL) cgiUrl: string
  ) { 
    super(http, cgiUrl);
  }
}
