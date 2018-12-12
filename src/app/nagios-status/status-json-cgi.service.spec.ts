import { TestBed } from '@angular/core/testing';

import { StatusJsonCgiService, STATUS_CGI_URL } from './status-json-cgi.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

describe('StatusJsonCgiService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [
      HttpClientTestingModule
    ],
    providers: [
      { 
        provide: STATUS_CGI_URL, 
        useValue: "http://localhost/nagios/cgi-bin/statusjson.cgi" 
      }
    ]
  }));

  it('should be created', () => {
    const service: StatusJsonCgiService = TestBed.get(StatusJsonCgiService);
    expect(service).toBeTruthy();
  });

  it('should retrieve service status', (done: DoneFn) => {
    const service: StatusJsonCgiService = TestBed.get(StatusJsonCgiService);
    const http: HttpTestingController = TestBed.get(HttpTestingController);

    service.getServiceStatus().subscribe(
      serviceStatusList => {
        expect(serviceStatusList.length).toBeGreaterThan(0);
        done();
      }
    );

    const req = http.expectOne("http://localhost/nagios/cgi-bin/statusjson.cgi?details=true&query=servicelist");
    req.flush(response);
  })
});

const response = {
  "format_version": 0,
  "result": {
      "query_time": 1544617497000,
      "cgi": "statusjson.cgi",
      "user": "",
      "query": "servicelist",
      "query_status": "released",
      "program_start": 1543640605000,
      "last_data_update": 1543793784000,
      "type_code": 0,
      "type_text": "Success",
      "message": ""
  },
  "data": {
      "selectors": {

      },
      "servicelist": {
          "nwappdev": {
              "Fee Microservice Health": {
                  "host_name": "nwappdev",
                  "description": "Fee Microservice Health",
                  "plugin_output": "(Return code of 13 for service 'Fee Microservice Health' on host 'nwappdev' was out of bounds)",
                  "long_plugin_output": "",
                  "perf_data": "",
                  "max_attempts": 4,
                  "current_attempt": 4,
                  "status": 16,
                  "last_update": 1543793784000,
                  "has_been_checked": true,
                  "should_be_scheduled": true,
                  "last_check": 1543758116000,
                  "check_options": 0,
                  "check_type": 0,
                  "checks_enabled": true,
                  "last_state_change": 1543603704000,
                  "last_hard_state_change": 1543603704000,
                  "last_hard_state": 2,
                  "last_time_ok": 1542800948000,
                  "last_time_warning": 0,
                  "last_time_unknown": 0,
                  "last_time_critical": 1543758116000,
                  "state_type": 1,
                  "last_notification": 1543603764000,
                  "next_notification": 1543607364000,
                  "next_check": 1543758416000,
                  "no_more_notifications": false,
                  "notifications_enabled": true,
                  "problem_has_been_acknowledged": false,
                  "acknowledgement_type": 0,
                  "current_notification_number": 1,
                  "accept_passive_checks": true,
                  "event_handler_enabled": true,
                  "flap_detection_enabled": true,
                  "is_flapping": false,
                  "percent_state_change": 0,
                  "latency": 0,
                  "execution_time": 0,
                  "scheduled_downtime_depth": 0,
                  "process_performance_data": true,
                  "obsess": true
              }
          }
      }
  }
}