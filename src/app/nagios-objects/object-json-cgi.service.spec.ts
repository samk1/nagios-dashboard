import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController, TestRequest } from '@angular/common/http/testing';

import { ObjectJsonCgiService, OBJECT_CGI_URL } from './object-json-cgi.service';

describe('ObjectJsonCgiService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      { provide: OBJECT_CGI_URL, useValue: "http://localhost/nagios/cgi-bin/objectjson.cgi" }
    ],
    imports: [
      HttpClientTestingModule
    ]
  }));

  it('should be created', () => {
    const service: ObjectJsonCgiService = TestBed.get(ObjectJsonCgiService);
    expect(service).toBeTruthy();
  });

  it('should retrieve hostgroup details', (done: DoneFn) => {
    const service: ObjectJsonCgiService = TestBed.get(ObjectJsonCgiService);
    const http: HttpTestingController = TestBed.get(HttpTestingController);

    service.getHostgroupDetails()
      .subscribe(hostgroups => {
        expect(hostgroups.length).toBeGreaterThan(0);
        done();
      });

    const req: TestRequest = http.expectOne("http://localhost/nagios/cgi-bin/objectjson.cgi?query=hostgrouplist&details=true");

    req.flush(hostgroupDetailsQueryResponse);
  })
});

const hostgroupDetailsQueryResponse = {
  "format_version": 0,
  "result": {
    "query_time": 1544088533000,
    "cgi": "objectjson.cgi",
    "user": "",
    "query": "hostgrouplist",
    "query_status": "released",
    "program_start": 1543640605000,
    "last_data_update": 1543231889000,
    "type_code": 0,
    "type_text": "Success",
    "message": ""
  },
  "data": {
    "selectors": {

    },
    "hostgrouplist": {
      "dev": {
        "group_name": "dev",
        "alias": "DEV Servers",
        "members": [
          "nwappdev",
          "nwiisdev"
        ],
        "notes": "",
        "notes_url": "",
        "action_url": ""
      },
      "fee-microservice-host": {
        "group_name": "fee-microservice-host",
        "alias": "Fee Microservice Hosts",
        "members": [
          "nwappdev"
        ],
        "notes": "",
        "notes_url": "",
        "action_url": ""
      },
      "prod": {
        "group_name": "prod",
        "alias": "PROD Servers",
        "members": [
          "nwappprod"
        ],
        "notes": "",
        "notes_url": "",
        "action_url": ""
      },
      "uat": {
        "group_name": "uat",
        "alias": "UAT Servers",
        "members": [
          "nwappuat"
        ],
        "notes": "",
        "notes_url": "",
        "action_url": ""
      }
    }
  }
}